import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context'
// in a this function we need countcontext value
export const Navbutton = () => {
    const counter=useContext(counterContext)
  return (
    <>
    <div>Nav_button counter</div>
    <div>{counter[0]}</div>
    <button onClick={() => counter[1]((count) => count + 1)}>
          count is {counter}
        </button>
    </>
  )
}
