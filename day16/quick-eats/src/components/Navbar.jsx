import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../app/authSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav style={{ display: "flex", gap: "16px", padding: "10px", justifyContent: "center" }}>
      {user ? (
        <>
        <button onClick={handleLogout} style={{ cursor: "pointer" }}>
          Logout
        </button>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart ({totalCount})</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/ragister">Register</Link>
        </>
      )}

      <Link to="/">Home</Link>
      
    </nav>
  );
};

export default Navbar;
