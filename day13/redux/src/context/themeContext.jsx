import { createContext, useState } from "react";



export const ThemeContext = createContext() ;


export const ThemeProvider = ({children}) => {

    const [count , setCount] = useState(0) ;


    return (
        <ThemeContext.Provider value={count} >
            {children}
        </ThemeContext.Provider>
    )
}