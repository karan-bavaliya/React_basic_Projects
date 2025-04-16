import { useState,useCallback ,useEffect} from "react";

import "./App.css";

function App() {
  const [password,setpassword] =useState()
  const [length,setlength]=useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false)
  const [chachterAllowed,setnumberAllowed]=useState(false)
  // const passwordgenerator=useCallback(fn,depecmc)
  // jayaree koi ek karata vadhare jagayayee call thase jethi function ma change thay chhee , tayare usecallback thase, what  is the dependencies ke jee varible ke etc jenathi function change ke effact thay chee tene dependencies kahevay, ex:number,chachter 
  const passwordgenerator=useCallback(()=>{
   let pass=""
     let str="ABCDEFGHIGKLMNOPQRSTVWXYZabcdefghijkimnopqrstvwxyz"

    if (numberAllowed)   str+="0123456789"
    if(chachterAllowed) str+="!@#$%^&*(){}"
    for(let i=0; i<=length; i++ ){
      let char =Math.random() * str.length +1 
      // console.log(char);
      pass += str.charAt(char)

      
     
      setpassword(pass)
  
    } 
  },[numberAllowed,chachterAllowed,setpassword,length])
useEffect(()=>{
  passwordgenerator()

},[chachterAllowed,numberAllowed,passwordgenerator,length])


  

  return (
    <>
      <div className="bg-slate-900 max-w-xl w-full  text-white text-center shadow-md text-2xl p-5 flex flex-col ">
        <span className="m-4">password generator</span>

        <div className="flex">
          <input type="text" className="w-full outline-0 text-black" value={password}/>
          <button className="p-2 bg-blue-600 text-center cursor-pointer">
            copy
          </button>
        </div>

        <div className="flex items-center  p-5">
          <input type="range" min="6" max="100" />
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{
              numberAllowed((prev)=>!prev);
            }}  />
            <label htmlFor="numberInput">Numbers</label>
           
          </div>
        </div>
      
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={chachterAllowed} onChange={()=>{
              chachterAllowed((prev)=>!prev);
            }}  />
            <label htmlFor="numberInput">charchter</label>
           
          </div>
        </div>
      
    </>
  );
}

export default App;
