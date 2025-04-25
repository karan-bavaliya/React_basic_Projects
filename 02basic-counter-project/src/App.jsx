import { useState} from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
 
  let [count, setCount] = useState(0);
  

  // 1.jayare depenencies[] no use kari aetale  jayare first time components render thase tayare useeffract run thase , but pachi game ketali compents render thay but show useeffect srun nahi thay.
  // useEffect(()=>{
  //   alert('component was renders');
  // },[])

  // 2.jayare depenencies no  use naaaa kari aetale jetali var component render thase ketali var   useEffect  run thase   
  // useEffect(()=>{
  //     alert('component was renders');
  //   })


  function addValue(){
    
    setCount(++count)
    // setCount(count++)
    console.log("click",count);
  }
  function removeValue(){
    count=count-1;
    setCount(count)
  }
  if(count < 0){
    setCount(0)
  }
  if(count > 20)
    setCount(20)

  return (
    <>

     {/* why use a usestate : for a state updatetion essay with usestate . before usestate use a class compontents for state upadteion
      usestate in array return 
      1. in a array , fist index of array is counter , after  next index setcounter is function

      imortant notes  : jetali var state update (Aetale ke jeatali add value uper click karase)  tetali var compontents re-render thase.
     */}
     <h2> Counter :   {count}</h2>
     <button onClick={addValue} style={{margin:"15px"}}>Add value</button>
     <br />
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
