import {configureStore} from '@reduxjs/toolkit'
//redux mathi configureStore laya
import todoReducer from '../features/todo/todoSlice'

//consfigureStore ek object le chee
export const store = configureStore({
    //after make a reducers functalility
    //for a storen knowleage for a reducers function
    // for a store awerness for a reducer 
    reducer:todoReducer
})
//after we make slice for card, todo anthing we need ,
//...........
// createSlice() is a function in Redux Toolkit that helps you define all of this in one place.
// The state for a specific feature
// The actions related to that feature
//name  intialstate
// The reducers that handle those actions

//.......................
// what is the reducers
// A reducer is a functions that determines how the state changes in response to an action.
// In Redux Toolkit, you define reducers inside createSlice().


