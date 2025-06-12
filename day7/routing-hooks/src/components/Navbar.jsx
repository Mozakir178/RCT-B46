import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate() ;
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#eee", display:"flex", gap: "50px" }}>
      <Link to="/">Home</Link> 
      {/* <Link to="/products">Products</Link>  */}
      {/* <button onClick={() => navigate('/about')}>About</button> */}
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
