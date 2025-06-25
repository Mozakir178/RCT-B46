// redux toolkit
import counterReducer, { increament } from "./counterSlice"
import themeReducer from "./themeSlice"
import {configureStore} from "@reduxjs/toolkit" ;

export const store = configureStore({
    reducer: {
        // instead of reducer, will create slices and update here example: conterReducer -> counterSlice 
        counter: counterReducer ,
        theme : themeReducer
    }
})
//    counter/value -> value from counter
//    theme/value -> value from theme
// store = {
// counter: {
//     count: 0,
//     value: 0
// }

// theme : {
//     theme: "light",
//     value : 0
// }
// }


//actions :
// counter/increament -> action to increase the count from counter
// counter/decreament -> action to decrease the count from counter
// counter/reset -> action to reset the count from the counter


// theme/toggle -> action to toggle theme 
// theme/increament -> action to increate the value from the theme 

// onclick(() => dispatch(increament)) -> // counter slice increament will get called 
// onclick(() => dispatch({type: "couter/increament"}))