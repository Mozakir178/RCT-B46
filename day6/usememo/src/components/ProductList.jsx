import { memo } from "react";
import Product from "./Product";

function ProductList({ products, addToWishlist , helperFunction }) {
  console.log("🔁 ProductList rendered");
  helperFunction() ;
  return (
    <div>
      <h2 >🛒 Products</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToWishlist={addToWishlist}
        />
      ))}
    </div>
  );
}

export default memo(ProductList);
