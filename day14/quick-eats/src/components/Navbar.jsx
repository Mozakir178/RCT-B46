// login ? logout 

import { logoutUser } from "../app/authSlice"

const Navbar = () => {
    const {user} = useSelect(state => state.auth.user)
    return (
        <nav>
            
            {user ? <button onClick={dispatchEvent(logoutUser())}>Logout</button>  : <Link to="login"> Login</Link>}
        </nav>
    )

}