import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid generate a unique id ,purpose need in todo id


// in starting store ma shu hase  te initaialstate ma lakhi chii jeva ke  database data, another data  
const initialState = {
    todos: [{ id: 1, text: "hello world" }]
}

export const todoslice = createSlice({

    //slice name
    name: 'todo',
    
    //slice intialState
    initialState,

    //reducers
    // in a reducers , properties and functions
    reducers: {
        //only function decleration not a write a function defenation
        addTodo: (state, action) => {
            // state :Current state of that slice 

            //..............action....................
            // action.payload: new todo text
            // payload means we call as a from a user data  , 
            // action is a object : { type: 'todo/addTodo', payload: 'Learn Redux Toolkit' }
            // therefore we access as a action.payload , and in action.payload ma nee user data aapayo te fetch karasee
            //aama user re text pass karayo chhe
            //const newtodo=
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            //  here we not make a new todo array and spread old array new and as new todo (in a context api), 
            // here state is always preserve  therefore directly push
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            //here user pass remove id therefore use action for fetch user data
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        
        }
    }
})
// two part for  export
//1. export slice 

//2.exports reducers for a functality use addtodo,etc..
export const  {addTodo,removeTodo} = todoslice.actions

//  take main source of reducer for a store value
// store ma reducers pass karava mate , reducer no main source expoer kariye chhiyee 
export default  todoslice.reducer