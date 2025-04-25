import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/Todocontext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItems'
function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  const addTodo = (todo) => {
    // in a parametaer todo is from input value it a simple string
    // setTodos(todo)
    // if we pass directly add value, therfore old all value of todo is  delete therefore we make newarray IN old value and new value                               
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((PrevTodo) => (PrevTodo.id === id) ? todo : PrevTodo))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((PrevTodo) => PrevTodo.id !== id))
  }
  const toggleCompleate = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, compleated: !prevTodo.compleated } : prevTodo))
  }
  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleate }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id} className='w-full'><TodoItem todo={todo}/></div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
