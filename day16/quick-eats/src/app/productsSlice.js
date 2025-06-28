

//keep state for all the food products available in the firebase menuItems collection

// create Async Thank that can fetch the data from firestore  and keep this data in product Slice 

import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { collection , getDocs } from "firebase/firestore";
import {db} from "../utils/firebase" 

export const fetchProducts = createAsyncThunk(
    'fetch/products',
    async(_, {rejectWithValue}) => {
        try {
            const snapshot = await getDocs(collection(db,"menuItems")) ;
            return snapshot.docs.map(doc => ({id: doc.id , ...doc.data()}))
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong") ;
        }
    }
)

const productsSlice = createSlice({
    name : "products" , 
    initialState : {
        items : [] ,
        loading : false ,
        error : null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending , (state ) => {
            state.loading = true ,
            state.error = null 
        })
        .addCase(fetchProducts.fulfilled , (state , action) => {
            state.loading = false,
            state.error = null ,
            state.items = action.payload
        })
        .addCase(fetchProducts.rejected , (state , action) => {
            state.loading = false ,
            state.error = action.payload
        })
    }
})


export default productsSlice.reducer ;
