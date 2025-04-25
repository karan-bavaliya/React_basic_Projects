import React, { useCallback, useState } from "react";
import Greeting from "./components/Greeting";

function App() {
  let name="karan"
  let [count,setcount]=useState(0)

  // 1.important when props value change automatic compopnents is re-render 
  //2. without usestate :counter na karane state update thay tayare jetali var count state update thay ketali var app components re-render thase,joo 1st time render and 2end time render vakhte function same j  chhe but javasctipt mate te function bannee same hova chhata false aavase ,jethi value change thaya hoavana karane ,greeting ma props (getcount) change thay chhe jethi greeting compenents re-render thay chhee .
  // function getCount(){
  //   console.log("hello");
    
  // }

  // usecallback use: aa vakhte jayaree state re-render thay te vakhtee kahiyee kee function same jee jethi jo usecallback thi te samaji react samajii jase te function ek j function chhee .   
  
  // same function game tetali var render thay to teni pan benne function same re usecallback thi 
  // let getCount = useCallback( () => {
  //   return count;
  // },[])

  return (
    <>
      <Greeting value={name}   setcount= {getCount}/>
      <button onClick={()=>{setcount(count++)}}> add value : {count}</button>
    </>
    
    )
}

export default App;
