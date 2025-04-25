import React from 'react'
import { useEffect } from 'react'

function Navbar({value}) {

  useEffect(()=>{
   alert(`navbar render ${value}`) 
  })
  return (
    <div> hello i am navbar{value}</div>
  )
}

export default Navbar