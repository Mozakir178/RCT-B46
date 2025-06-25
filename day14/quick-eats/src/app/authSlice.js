// to create 3 async function 
import {createAsyncThunk, createSlice, miniSerializeError} from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword } from "firebase/auth"

//createAsyncThunk for Signup 
export const ragisterUser = createAsyncThunk(
        'users/ragister' ,
        async ({email,password} , {rejectWithValue}) => {
            try {
                const credentials = await createUserWithEmailAndPassword(auth, email,password) ;
                return {uid: credentials.user.uid , email : credentials.user.email};
            } catch (error) {
                return rejectWithValue(error.message || "custom error message") ;
            }
            

        }
)


export const loginUser =createAsyncThunk(
    'auth/login',
    async({email,password},{rejectWithValue})=>{
    try {
        const userCredentials=await signInWithEmailAndPassword(auth,email,password);
        return {uid:userCredentials.user.uid,email:userCredentials.user.email}
    } catch (error) {
        return rejectWithValue(error.message || "Failed to Login")
    }
})


export const logoutUser=createAsyncThunk(
    'auth/logout',
    async(_, {rejectWithValue})=>{
        try {
             await signOut(auth)
             return true ;
        } catch (error) {
            return rejectWithValue(error.message);
        }
 })
 
// 10 minutes 
// login
// logou 

//ragisterUser -> fulfilled => {loading = false , user: {uid , email} , error : null} 
// logout -> pending  {loading = true , user: {uid , email} , error : null} -> after sometime resolve

const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : null ,
        loading : false ,
        error : null 
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(ragisterUser.pending ,(state) => {
            state.loading = true ,
            state.error = null
        } )
        .addCase(ragisterUser.fulfilled , (state , action) => {
            state.loading = false ,
            state.error = null ,
            state.user = action.payload
        })
        .addCase(ragisterUser.rejected , (state , action ) => {
            state.error = action.payload
            state.loading = false 
        })
        .addCase(loginUser.pending , (state) => {
           state.loading = true ,
           state.error = null 
        })
        .addCase(loginUser.fulfilled , (state , action) => {
            state.loading = false ,
            state.error = null ,
            state.user = action.payload
        })
        .addCase(loginUser.rejected , (state, action) => {
            state.loading = false ,
            state.error = action.payload
        })
        .addCase(logoutUser.pending , (state) => {
            state.loading = true ,
            state.error = null
        })
        .addCase(logoutUser.fulfilled , (state) => {
            state.user = null ,
            state.error = null ,
            loading = false
        })
        .addCase(logoutUser.rejected , (state, action) => {
            state.error = action.payload ,
            state.loading = false 
        })
    }
})


export default authSlice.reducer ;

// logout button 

// user : abc@gmail.com 
// user : {uid: 1 , email : abc@gmail.com}