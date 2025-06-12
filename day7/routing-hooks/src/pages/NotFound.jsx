import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>404 – Page Not Found</h2>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default NotFound;
