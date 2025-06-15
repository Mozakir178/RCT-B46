import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false) ;
    const navigate = useNavigate();

    const login = ({email,password}) => {
        if(email == "dummy@email.com" && password == "1"){
            setIsAuthenticated(true);
            navigate("/products");
        }else{
          alert("Wrong credentials")
        }
            
        console.log(isAuthenticated)
    }

    const logout = () => {
        setIsAuthenticated(false);
        navigate("/login");
        console.log(isAuthenticated);
    }

    return(<>
        <AuthContext.Provider value={{isAuthenticated, login, logout}} >
            {children};
        </AuthContext.Provider>
    </>)
}

export const useAuth = () => useContext(AuthContext);