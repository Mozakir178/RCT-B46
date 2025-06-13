import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// ---->
// <---- 
function Navbar(){

    const {theme, toggleTheme} = useContext(ThemeContext) ;

    return (
        <>
        <nav style={{background : theme == "dark" ? "grey" : "white" ,
                color: theme == "dark" ? "white" : "red" ,
                padding : "1rem" ,
                justifyContent: "space-between" ,
                display : "flex" ,
                // flexDirection : "row-reverse"
        }}>
            <h2 >Theme Toggle</h2>
            <button onClick={toggleTheme}> Switch to: {theme=="dark" ? "Light" : "Dark"} </button>
        </nav>
        
        </>
    )

}

export default Navbar ;