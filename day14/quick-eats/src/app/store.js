// create store and hold authReducer 
import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authSlice"

export const store = configureStore({
    reducer: {
        auth : authReducer 
    }
})