import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import ForgotPassword from "./ForgotPassword";



export const Login = () => {

    const [email, setEamil] = useState("");
    const [password , setPassword] = useState("");
    const [errMsg , setErrMsg] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth , email, password) ;
            navigate("/products");
        } catch (error) {
            setErrMsg("Invalid Email or Password");
        }
        
    }
    return (<>
        <div style={{ padding: '1rem' }}>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" 
                value={email}
                onChange={(e) => setEamil(e.target.value)}
                placeholder="Enter your email"
                required
                />
                <br /><br />
                <input type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                />
                <button type="submit">Login</button>
            </form>

            {errMsg && <p>{errMsg}</p>}
        </div>
        <Link to="/reset" >Forgot Password</Link>
    </>)
}