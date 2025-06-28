// create store and hold authReducer 
import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import productsReducer from "./productsSlice"
import cartReducer from "./cartSlice"
import orderReducer from "./orderSlice"

export const store = configureStore({
    reducer: {
        auth : authReducer ,
        products : productsReducer,
        cart : cartReducer,
        orders : orderReducer 
    }
})