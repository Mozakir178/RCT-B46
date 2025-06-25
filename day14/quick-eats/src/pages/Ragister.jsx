// email and password, call ragister 

import { useState } from "react"
import {useDispatch } from "react-redux"
import { ragisterUser } from "../app/authSlice";


const Ragister = () => {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const dispatch = useDispatch();
    const {user, loading , error} = useSelector(state => state.auth)


    const handleSubmit = async (e) => {
        e.preventDefault();
            //ragisterUser 
        await dispatch(ragisterUser(email,password)) ;
        if(user){
            //user is not null
            // navigate
        }
          
    }


    return(<>
    
        <form onSubmit={handleSubmit} >

        <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Ragister</button>

        </form>
    </>)
}