import { useParams } from "react-router-dom"



const product = [

    {id : 1 , "title" : "Laptop" , "des" : "Some description about Laptop"},
    {"id": 2 , "title" : "Smartphone" , "des" : "Some description about Smartphone"},
    {"id" : 3 , "title" : "Headphones" , "des" : "Some description about Headphones"}
]

function ProductDetail() {
    const {id} = useParams() ;
    console.log(id, product) ;
    const prod = product.find((el) => el.id == id) ;
    console.log(prod)

    return(
        <>
        <div>
            <h1>{prod.title}</h1>
            <p>{prod.des}</p>
            <p>{prod.id}</p>
        </div>
        </>
    )
}

export default ProductDetail ;