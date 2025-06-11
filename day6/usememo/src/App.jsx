import { useEffect, useState , useMemo, useCallback} from "react";
import ProductList from "./components/ProductList";
import Wishlist from "./components/Wishlist";

function App() {
  const [count, setCount] = useState(0);
  const [unwantedSearch, setUnwantedSearch] = useState("")
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);




// const addToWishlist = (product) => setWishlist((pre) => pre.includes(product) ? pre: [...pre , product]) ;
const addToWishList = useCallback(() => {
 return (product) => setWishlist((pre) => pre.includes(product) ? pre: [...pre , product]) ;
}, [])
// helperFunction and addToWishList -> all the functions will get recreated -> address will change
// addToWishlist -> 123 -> again function got created -> 1234
  

  // const helperFunction = () => console.log("Helper Function got created") ;
  const helperFunction = useCallback(() => {
    return () => console.log("Helper Function got created") 
  } , [])

// 1 million product 

 const sorted = useMemo(() => {
  const filtered = products.filter((product) => {
    console.log("Filter function executed");
    return product.title.toLowerCase().includes(searchTerm.toLowerCase())
  }
  );

  const sorted = () =>{ [...filtered].sort((a, b) => {
    console.log("Sorting function executed")
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price
    
  }
  );
}
  return sorted ;
} , [products,sortOrder,searchTerm])


// return sorted ;
  // useMemo(callback , [dependency array]) -> return computed value 

  // we want filtered and sorted array, only when product array, searchTerm, orderBy gets change 

  

  return (
    <div>
      <div style={{marginLeft: "40%", marginTop: "100px"}}>

      
      <button onClick={() => setCount(count + 1)}>Unrelated State: {count}</button>
      <input type="text" onChange={(e) => {
        setUnwantedSearch(e.target.value)
         console.log(unwantedSearch)
      }
      }/>
      </div>

        <div style={{justifyItems: "center"}}>
      <h1>🛍️ Product Dashboard</h1>
      <Wishlist items={wishlist} />
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Price: Low - High</option>
        <option value="desc">Price: High - Low</option>
      </select>
</div>
      <ProductList products={sorted} addToWishlist={addToWishList} helperFunction={helperFunction} />

    </div>
  );
}

export default App;
