import { useNavigate } from "react-router-dom"


export const NotFound =() => {

    const navigate = useNavigate();

    return(<>

        <h1>404 Not Fount</h1>
        <p>The page you are trying to access does not exists</p>

        <button onClick={() => navigate("/")}>Go to hompage</button>
        <button onClick={() => navigate(-1)}>Previous page</button>
    
    </>)
}

