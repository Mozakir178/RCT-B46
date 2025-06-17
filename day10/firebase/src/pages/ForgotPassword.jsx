

// will be taking user's email and calling this sendResetPasswordEmail() 
// it will return promise -> promise is resolve -> reset link sent , else will show error
// email , errMsg, message

import { useState } from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";


function ForgotPassword(){
    const [email , setEamil] = useState("");
    const [errMsg , setErrMsg] = useState("");
    const [succ , setSucc] = useState("");

    const handleReset = async (e) => {
        e.preventDefault() ;
        setErrMsg(null) // ignore previous error 

        try {
            // await sendResetPasswordEmail(auth , email) ;
            await sendPasswordResetEmail(auth, email) ;
            setSucc("Password reset link has been send");
        } catch (error) {
            setErrMsg(error.message);
        }

    }


    return (<>
    <h1>Reset Password</h1>

    <form onSubmit={handleReset}>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEamil(e.target.value)} />

        <button type="submit"> Send Reset Link</button>
    </form>

    {errMsg && <p> {errMsg}</p>}
    {succ && <p>{succ}</p>}
    
    </>)
}

export default ForgotPassword; 



