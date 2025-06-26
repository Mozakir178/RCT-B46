// login ? logout 

import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../app/authSlice"
import {Link} from "react-router-dom"

const Navbar = () => {

    // get the data from the stroe -> useSelector
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    console.log(user)

    const handleLogout = () => {
        dispatch(logoutUser()) ;
    }
    return (
       <nav>
       {user && <button onClick={handleLogout}>Logout</button>  }
       {!user &&  <Link to="/login" >Login</Link>}
       {!user &&  <Link to="/ragister" >Ragister</Link>}
        <Link to="/"> Home</Link>
        {user && <Link to="/products" >Items</Link>}
       </nav>
    )

}

export default Navbar ;