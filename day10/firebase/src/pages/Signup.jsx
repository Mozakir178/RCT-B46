import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";




function Signup() {

    const [email , setEamil] = useState("");
    const [password , setPassword] = useState("");
    const [errMsg , setErrMsg] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password) ;//promise -> if resolve navigate to product else error
            navigate("/products");
        } catch (error) {
            setErrMsg(error.message);
        }
    }



    return (<>
    
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEamil(e.target.value)} />
                <br /><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Signup</button>
            </form>

            {errMsg && <p>{errMsg}</p>}
        </div>
    </>)
}

export default Signup;