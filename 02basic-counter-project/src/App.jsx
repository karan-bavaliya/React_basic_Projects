import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
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
    */}
     <h2> Counter :   {count}</h2>
     <button onClick={addValue} style={{margin:"15px"}}>Add value</button>
     <br />
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
