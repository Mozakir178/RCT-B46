import { useState } from "react";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin} style={{ display: "inline-block" }}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" /><br/>
        <button type="submit">Login</button>
      </form>
      <p>New user? <Link to="/register">Register</Link></p>
    </div>
  );
};
export default Login;
