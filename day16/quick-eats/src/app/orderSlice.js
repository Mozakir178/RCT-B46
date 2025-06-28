

// all the item present in the card, we need to make one order object using those items, and store this
// object in the firestore orders collection 

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  collection , addDoc } from "firebase/firestore";
import {db } from "../utils/firebase"

export const submitOrder = createAsyncThunk(
    "order/submit",
    async (order , {rejectWithValue}) => {
        try {
           await addDoc(collection(db,"orders") , order) ;
           return true ;
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    }
)


const orderSlice = createSlice({
    name: "orders" ,
    initialState : {
        stutus : "idle" ,
        error : null,
        loading: false 
    },
    extraReducers : (builder) => {
        builder
        .addCase(submitOrder.pending , (state) => {
            state.stutus = "loading",
            state.loading = true
        })
        .addCase(submitOrder.fulfilled , (state) => {
            state.stutus = "succeeded",
            state.loading = false 
        })
        .addCase(submitOrder.rejected , (state , action) => {
            state.stutus = "failed";
            state.error = action.payload
            state.loading = false 
        })
    }
})


export default orderSlice.reducer ;

