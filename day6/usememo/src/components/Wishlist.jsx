import { memo } from "react";

function Wishlist({ items }) {

  console.log("🔁 Wishlist rendered");
  return (
    <div>
      <h2>❤️ Wishlist</h2>
      {items.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        items.map((item, index) => (
          <div key={index}>
            {item.title} - ₹{item.price}
          </div>
        ))
      )}
    </div>
  );
}

export default memo(Wishlist);
