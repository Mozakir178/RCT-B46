import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams(); // 8
//http://localhost:5173/products/
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h3 style={{ padding: "1rem" }}>Loading product details...</h3>;

  return (
    <div style={{ padding: "1rem" }}>
     

      <div style={{ display: "flex", gap: "2rem" }}>
        <img src={product.image} alt={product.title} width="200" />
        <div>
          <h2>{product.title}</h2>
          <p><b>₹ {product.price}</b></p>
          <p>{product.description}</p>
          <p><i>Category: {product.category}</i></p>
          <p>Rating: {product.rating?.rate} ⭐</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
