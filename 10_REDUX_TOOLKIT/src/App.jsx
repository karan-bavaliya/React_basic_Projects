import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/todo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1 className='bg-red-500'>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )

}

export default App
