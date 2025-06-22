import { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleRegister} style={{ display: "inline-block" }}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" /><br/>
        <button type="submit">Register</button>
      </form>
      <p>Already have account? <Link to="/login">Login</Link></p>
    </div>
  );
};
export default Register;
