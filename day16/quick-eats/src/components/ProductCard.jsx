import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        width: "220px",
        textAlign: "center",
        margin: "10px"
      }}
    >
      <img src={product.image} alt={product.title} width={200} height={200} />
      <h3 style={{ fontSize: "16px" }}>{product.title}</h3>
      <p style={{ margin: "5px 0" }}>${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        style={{
          padding: "5px 10px",
          cursor: "pointer",
          border: "none",
          backgroundColor: "#007bff",
          color: "white"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
