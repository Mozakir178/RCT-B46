import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


export const Home = () => {
    // const {user} = useContext(AuthContext) ;
    return (<>

    {/* <h1>{user && <p>Hello {user.email}</p>}</h1> */}
        <div style={{ padding: '1rem' }}>
            <h2>Welcome to Homepage</h2>
            <p>This is a sample React project using DummyJSON API.</p>
        </div>
    </>)
}