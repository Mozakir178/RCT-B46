import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useTheme } from "../context/ThemeContext";


export const Navbar = () => {
    const { isAuthenticated , logout} = useContext(AuthContext);
    const {toggleTheme , theme} = useTheme();
    const linkStyle = {
    color: "white",
    textDecoration: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    padding: "0",
  }
    return (<>
        <nav style={{display:"flex" , justifyContent: "space-evenly" , background: theme == "dark"? "gray" : "red" , gap: "150px" , padding: "20px"}}>
            <Link style={linkStyle} to ="/" >Home</Link>
            {!isAuthenticated? ( <Link style={linkStyle} to="/Login">Login</Link> ): (<button style={linkStyle} onClick={logout}>Logout</button>)}
            {isAuthenticated && <Link style={linkStyle} to="/Products">Products</Link>}
            <button onClick={toggleTheme}>Change Theme: {theme == "dark"? "Light" : "Dark"}</button>
        </nav>
    </>)
}