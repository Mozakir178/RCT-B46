import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//thunk 
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_ , {rejectWithValue}) => {
        try {
            const res = await fetch("https://dummyjson.com/users?limit=5");
            const data = await res.json() ;
            return data.users 
        } catch (error) {
            return rejectWithValue(error.message || "Something went wrong")
        }
    }
)

//fetchUsers.pending 
//fetchUsers.fulfilled
//fetchUsers.rejected



const initialState = {
    users: [] ,
    loading: false ,
    error: null ,
    count : 0
}


const userSlice = createSlice({
    name : "users" , 
    initialState ,
    reducers : {
        increament : (state) => { state.count +=1}
    },
    extraReducers : (builder) => {
        builder
        // .addCase( case , logic to manipulate)
        .addCase(fetchUsers.pending , (state) => { 
            state.loading = true ;
            state.error = null}) 
        .addCase(fetchUsers.fulfilled , (state , action) => {
            state.loading = false ;
            state.users = action.payload ;
        })
        .addCase(fetchUsers.rejected , (state , action) => {
            state.loading = false ;
            state.error = action.payload ;
        })
    }
})

export const {increament} = userSlice.actions;

export default userSlice.reducer ;