import { useState } from "react"

function Profile(){
 // from here function is starting so this layer is top level leyer 
    const [variable, setVariable]  = useState("Initial Value") ;
    return (
        <>
            <p>{variable}</p>
        </>
    )
}

export default Profile ;