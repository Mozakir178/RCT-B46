

// initial data for counter slice + reducer + creating automatic actions -> createSlice

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count : 0 ,
    value : []
}

const counterSlice = createSlice({
    name: "counter" ,
    initialState,
    reducers : {
        // logic to manuplate the initial state 
        increament : (state) => { state.count +=1} ,// RTK uses immer so this is allowed,
        decreament : (state) => {state.count -= 1} ,
        increaseByValue: (state, action) => {state.value.push(action.payload) },
        reset : (state) => {state.count = 0 }

    }
})
// redux toolkit will create action automatically 

export const {increament , decreament , reset , increaseByValue} = counterSlice.actions ;

// we need reducer 
export default counterSlice.reducer ;

// a single file can have multiple export but only 1 default export 