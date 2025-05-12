
import React, { useState, useEffect } from "react"
import authService from "./appwrite/auth"
import { login, logout } from './store/authSlice';
import {useDispatch} from 'react-redux';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {

  // console.log(process.env.REACT_APP_APPWRITE_URL);
  //env file process ma difeind hoy chee create-react-app MA
  // it not a work because we make app using vite

  // console.log(import.meta.env.VITE_APPWRITE_URL); ANS: test environment


  const [loading, setloding] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {
    authService.getcurrectUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } 
        else {
          dispatch(logout())
        }

      })
      .finally(() => {
        setloding(false)
      })
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
