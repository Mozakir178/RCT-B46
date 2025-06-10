

// at the end, this componand will fetch the data and show on UI

import { useEffect, useMemo } from "react";
import { useState } from "react";
import "./css/ProductList.css" ;

function ProductList() {

    const [products, setProducts] = useState([]);
    const [searchData , setSearchData] = useState("")
    const [category , setCatogory] = useState("");
    const [sortBy , setSortBy] = useState("");

    // will try to fetch the data -> based on title
    // filter -> does it modify actual array?  no -> it will return new array 

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err));
    }
    ,[])

    //searchData = Shirt

    const sorted = useMemo(() => {

    const filteredData = products.filter((product) => {
        const search = product.title.toLowerCase().includes(searchData.toLowerCase()) ; // true or false
        const cat = category == "" || product.category.toLowerCase() === (category.toLowerCase()) ; // true or false ;
        return search && cat ;
     }) ;

     // whenever we want to make sure data is rerendering only when there is change is specific value( product)

     // we need to remember or memorize the data to check if there are any changes

     const sorted = filteredData.sort((a,b) => sortBy == "asc" ? a.price - b.price : sortBy == "dsc" ? b.price - a.price : 0) ;
     return sorted ;
    }, [sortBy , category, searchData , products])

    const allCategory = [...new Set(products.map(el => el.category))] ;
    // use useEffect to handle side effect 
    const divStyle = {
            color: "black" ,
            font: "arial" , 
            border: "1px solid black",
            borderRadius: "50px",
            margin: "auto",
            padding: "20px",
            width: "500px",
            height: "600px",
            backgroundColor: "white"
    }

    return (<>

            <input type="text" 
                    value={searchData}
                    onChange={e =>{
                         setSearchData(e.target.value);
                         console.log(searchData) ;
                    }} 
                    style={{padding: "10px" , width: "50%" , borderRadius: "20px"}}
                />

                <select onChange={e => setCatogory(e.target.value)} >
                    <option value="">All</option>
                    {allCategory.map((el,i) => (
                        <option key={i}  value={el} >{el}</option>
                    ))}
                </select>

                <select onChange={e => setSortBy(e.target.value)} >
                    <option value="">Sort ALL</option>
                    <option value="asc">ASC</option>
                    <option value="dsc">DSC</option>
                </select>
            <div className="container"  >

                {
                    sorted.map(product => (
                        <div key = {product.id} style={divStyle} >
                            <img src={product.image} alt={product.title} style={{width: "200px" , height: "200px"}}/>
                            <div>
                                <p>Product: {product.title}</p>
                                <p>Category: {product.category}</p>
                                <p>Description: {product.description}</p>
                                <p style={{overflow:"hidden" , height: "50px"}}>Price: {product.price}</p>
                            </div>
                        </div>
                    ))
                }
                
            </div>
    
    </>)
}

export default ProductList ;