import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// aa caluction pan bav load chhe but app compontent ni baharr hovathi  tee start ma ek j update thay chhe
const [count, setCount] = useState(0)
const myarray= new Array(30_000_000).fill(0).map((_,i)=>{
  return {
    index:i,
    isMegical: i===29_000_000
  }
  
})
function App() {


//here calcaulation very high it is effect perfomance, we need calculation

//when counter state is update every state is re-render therefore every time this high calutiuon run and effect in website
//therefore we use useMemo hook
    // let magical=myarray.find((item)=> item.isMegical === true )



    // aavi calution bav load lee aetale aapdpee ichhi kee aa ek var thavi joiyeee ,pachii te memoice thai jay aetale ek j var calu thay pacchi na thay cal,  tethi usememo use thay
    //useMemo aavi varablice aray, function matee memoeize karava mate use thay cheee
    //usecallback direct function ekvar ganatari ma lechee. jee usecallback ma samajayuu chee.
    let magical= useMemo(()=>{myarray.find((item)=> item.isMegical === true)},[])   
    console.log( "match",magical);
  return (
    <>
      {/* <div>megical number is: {magical.index}</div> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      
      </div>
    
    </>
  )
}

export default App
