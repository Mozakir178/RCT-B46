
import { Link } from "react-router-dom";

const product = [

    {"id" : 1 , "title" : "Laptop"},
    {"id": 2 , "title" : "Smartphone"},
    {"id" : 3 , "title" : "Headphones"}
]

function Product() {

    return(
        <>
        <div>
            <h2>Product List</h2>
            <ul>
                {product.map((prod) => (
                    <li key={prod.id}>
                        <Link to={`/products/${prod.id}`}> {prod.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
        
        </>
    )
}

export default Product ;