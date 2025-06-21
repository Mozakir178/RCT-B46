import { createSlice } from "@reduxjs/toolkit"
import { increament } from "./counterSlice";


const initialState = {
    theme : "dark",
    value : 0
}


const themeSlice = createSlice({
    //name of the slice
    name: "theme" ,
    initialState,
    reducers : {
        toggle: (state) => {state.theme == "light" ? state.theme = "dark" : state.theme = "light"},
        increament : (state) => state.value++  
    }
})

export const {toggle} = themeSlice.actions ;

export default themeSlice.reducer ;