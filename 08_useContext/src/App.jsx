
import { useState } from 'react'
import { counterContext } from './context/context'
import './App.css'
import { Navbar } from './components/navbar'

// why name is  a context api
//In React, Context provides a way to share global data (like theme, user info, or counter state) between components, without passing it through props man ually.
// It's called an API because React provides a set of methods to create, provide, and consume context.
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* if we need count state of app.jsx into  button in div of footer we pass  as a prop in all compontent  without use of usecontext*/}
      {/* if a we have many compontent in compontents we pass prop all compontent therefore .....................................use contetxt api for a  globaly data share  .............................. we  use  and directly button is access cout state.  */}
      {/* If you had 10 nested components, you'd need to pass count through every level. This is called prop drilling, and it makes code harder to manage  */}
    <counterContext.Provider value={[count,setCount]}>
      <div>hello</div>
        <Navbar/>
        
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </counterContext.Provider>
    {/* have countercontext.provider ni andar badha components and teni andar na nested compontent ma countercontext ni value malii jase , je compnents ne jarur hoy te direct import karave */}
    </>
  )
}

export default App
