import { useState } from 'react';
import './App.css';
import Card  from './components/Card.jsx'
function App() {
  let array=[1,2,3]
  let myobj={name:
    'karan'
  }
  let a =3
  return (
  <>

      <div className='flex'>
          <h1 className='bg-blue-400 rounded-md p-5 h-auto'> radha krishna</h1>
          <Card myarray={[1,2,3]} username="abc" boolean={true} />
          <Card username="gde" age={20}/> 
          {/*  */}
      </div>
  </>
  )
}

export default App
