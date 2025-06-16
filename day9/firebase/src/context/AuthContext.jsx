import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, use, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false) ;
    const [authLoading , setAuthLoading] = useState(true) ;
    const [user, setUser] = useState(null) ;
    const navigate = useNavigate();

    //keep record if auth state is changing -> onAuthStateChange -> user -> logout -> login, user -> logged in -> logout
    // will track real time user auth status 
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth , (user) => {
            // if user is true
            if(user) {
                setIsAuthenticated(true) ;
                setUser(user) ;// access to email and other details
                console.log(user);
            }
            else{
                setIsAuthenticated(false);
                setUser(null) ;
            }
            setAuthLoading(false) ;
        })

        //cleanup function
        return () => unsubscribe() ;

    } , [])


    const logout = () => {
        signOut(auth);
    }

    // const lgoin = ({email, password}) => {
        // SignInWithEmailAndPassword -> firebase
    // }

    // const signup = ({email, password}) {
        //createUserWithEmailAndPassword -> fire
    // }

    

    return(<>
        <AuthContext.Provider value={{isAuthenticated, user, authLoading, logout}} >
            {children};
        </AuthContext.Provider>
    </>)
}

export const useAuth = () => useContext(AuthContext);