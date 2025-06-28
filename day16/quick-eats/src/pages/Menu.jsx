import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../app/productsSlice";
import ProductCard from "../components/ProductCard";


    // cardSlice -> 
    //in the map -> button -> addToCard -> when click over button, your card slice should hand a addToCard thunk
    // Card.jsx -> this should show all the items present in the card 
    // //Card.jsx items should have removeFromCard -> 1 item should get remove
    // Card.jsx -> clearCard -> when clicked over this button, card should become empty
    // Card.jsx -> each item should have 2 buttons , Increase quantity and Decrease quantity -> it should be between 0 - 10
    // all the changes should reflect in the store 
const Menu = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {items.map((product) => (
        
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Menu;
