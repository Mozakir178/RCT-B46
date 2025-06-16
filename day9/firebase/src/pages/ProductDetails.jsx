import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h3 style={{ padding: "1rem" }}>Loading...</h3>;
  if (!product) return <h3 style={{ padding: "1rem" }}>Product not found</h3>;

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "auto" }}>
      <Link to="/products" style={{ marginBottom: "1rem", display: "inline-block" }}>
        ← Back to Products
      </Link>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start",
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: "300px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
        />
        <div>
          <h2>{product.title}</h2>
          <p style={{ color: "#555" }}>{product.description}</p>
          <h3>₹ {product.price}</h3>
          <p>⭐ {product.rating}</p>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
