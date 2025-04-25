import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
// import { Outlet } from 'react-router-dom'

function App() {


  return (
    <> 
    <h1 className='bg-slate-300 text-center'></h1>
      <Header/>
      {/* outlet ma jee hoy tej change thay route vakhte teni uper ke nichhe header ke footer ma kaai change na thai */}
      {/* <Outlet/> */}
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      
      </Routes>
      <Footer/>
    </>
  )
}

export default App
