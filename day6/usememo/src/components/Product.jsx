function Product({ product, addToWishlist }) {
    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" , display: "flex" , justifyContent: "space-between"}}>
            <div>
                <h3>{product.title}</h3>
                <p>₹{product.price}</p>
                <button onClick={() => addToWishlist(product)}>❤️ Wishlist</button>
            </div>
            <img src={product.image} alt="" style={{width: "120px" , height: "160px"}} />
        </div>
    );
}

export default Product;
