
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav style={{ padding: "1rem", background: "#eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Link to="/" style={{ fontWeight: "bold" }}>IdeaBoard</Link>
      <div>
        {user ? (
          <>
            <span style={{ marginRight: "1rem" }}>{user.email}</span>
            <button onClick={() => signOut(auth)}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: "1rem" }}>Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
