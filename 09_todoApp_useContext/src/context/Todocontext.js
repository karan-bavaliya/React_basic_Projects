import { createContext, useContext} from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo:"Todo msg",
            compleated:false,
        },
    ],

    // only function decleration not a write a function defenation
    addTodo:(todo)=>{

    },
    updateTodo:(id,todo)=>{

    },
    deleteTodo:(id)=>{

    },
    toggleCompleate:(id)=>{

    }

}) //object pass

//we make a hook , because we not import usecontext in set a todocontext many time direct expoert hook 

//compents ma direct todos,addtododeltetodo funcality use karava mate aavi rite karava
export const useTodo = () => {
    return useContext(TodoContext)
}



export const TodoProvider = TodoContext.Provider