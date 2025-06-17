import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {isAuthenticated , authLoading} = useContext(AuthContext) ;

    if(authLoading) return <h1> Checking Status</h1>

    return isAuthenticated ? children : <Navigate to="/login" />
}

export default PrivateRoute ;

//you clicked login button -> net slow -> it will take time to get response from firebase