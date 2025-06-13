import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
const location = useLocation() ;
  console.log(location) ;
  const navigate = useNavigate() ;
  
  return (
    <div style={{ padding: "1rem" }}>

      <button onClick={() => navigate("/products")}>Show Product</button>
      
      <h2>Welcome to ShopMate Pro</h2>
      <p>Explore products and details using the navigation above.</p>
    </div>
  );
};

export default Home;
