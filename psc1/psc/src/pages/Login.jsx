import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"



export const Login = () => {

    const {login} = useContext(AuthContext);
    const [email, setEamil] = useState("");
    const [password , setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login({email,password});
    }
    return (<>
        <div style={{ padding: '1rem' }}>
            <h2>Login Page</h2>
            {/* <p>Login logic coming soon...</p> */}
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
        </div>
    </>)
}