import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../app/cartSlice";
import CheckoutButton from "../components/CheckoutButton";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {items.map((item) => (
              <li
                key={item.id}
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "10px 0",
                }}
              >
                <p>
                  {item.title} — ${item.price} x {item.quantity}
                </p>
                <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
            <CheckoutButton/>
          </div>
         
        </>
      )}
    </div>
  );
};

export default Cart;
