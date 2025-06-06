

// at the end, this componand will fetch the data and show on UI

import { useEffect } from "react";
import { useState } from "react";

function ProductList() {

    const [products, setProducts] = useState([]);

    // will try to fetch the data

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err));
    }
    ,[])

    // use useEffect to handle side effect 

    return (<>
            <div>

                {
                    products.map(product => (
                        <div key = {product.id} >
                            <img src={product.image} alt={product.title} style={{width: "200px"}}/>
                            <div>
                                <p>Product: {product.title}</p>
                                <p>Category: {product.category}</p>
                                <p>Description: {product.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
    
    </>)
}

export default ProductList ;