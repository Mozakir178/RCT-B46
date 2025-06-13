import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams() ;
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get("category") || "all");
  const [sortOrder, setSortOrder] = useState(searchParams.get("sort") || "none" );
  const location = useLocation() ;
  const itemPerPage = 6 ;
  const page = searchParams.get("page") || 1 ;

  console.log(location) ;

  // const categoryFilter = searchParams.get("category") || "all";
  // const sortOrder = searchParams.get("sort") || "none" ;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setAllProducts(data);
        setLoading(false);
      });
  }, []);

  const handleCategoryChange = (e) => {
    const category = e.target.value ;
    setSearchParams((pre) => {
      const newParams = new URLSearchParams(pre) ;
      if(category == "all") newParams.delete('category') ;
      else newParams.set('category' , category)
      return newParams ;
    } )
    setCategoryFilter(category) ;

    
  };

  const handleSortChange = (e) => {
    const sort = e.target.value ;
    setSearchParams((pre) => {
      const newParams = new URLSearchParams(pre) ;
      if(sort == "none") newParams.delete('sort') ;
      else newParams.set('sort' , sort)
      return newParams ;
    } ) 
    setSortOrder(sort) ;

  };

  // 20 items -> we wanna show 6 item per page 

  const startIndex = (page-1) * itemPerPage ; // 0
  const endIndex = startIndex + itemPerPage ; // 6
  

  const paginatedData = [...products].slice(startIndex,endIndex) ;
  const onPageChange = (currPage) => {
    setSearchParams((pre) => {
      const newParams = new URLSearchParams(pre) ; //  newParams = {sort: asc} newParams.sort -> asc
      // newParams.set("page" , currPage) = {sort: asc , page: currPage}
      newParams.set("page" , currPage) ;
      return newParams ;
    })
    // setSearchParams({"page" : currPage}) ; // all privious query string will be removed 
    // {page: currPage}
  }

  useEffect( () => {
    let filtered = [...allProducts];

    // Filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter((prod) => prod.category === categoryFilter);
    }

    // Sort
    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setProducts(filtered) ;
}, [ categoryFilter , sortOrder] ) ;

  const uniqueCategories = [...new Set(allProducts.map((prod) => prod.category))];

  if (loading) return <h3 style={{ padding: "1rem" }}>Loading products...</h3>; // conditional rendring 

  return (
    <div style={{ padding: "1rem" }}>
      <h2>All Products</h2>

      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        
        <label>
          Filter by Category:{" "}
          <select value={categoryFilter} onChange={handleCategoryChange}>
            <option value="all">All</option>
            {uniqueCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

       
        <label>
          Sort by Price:{" "}
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="">None</option>
            <option value="asc">Low → High</option>
            <option value="desc">High → Low</option>
          </select>
        </label>
      </div>
            <Pagination totalPages={(Math.ceil(products.length/itemPerPage))} currPage={page} onPageChange={onPageChange}/>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
        {paginatedData.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            <img src={product.image} alt={product.title} width="100" height="100" />
            <h4>{product.title.slice(0, 25)}...</h4>
            <p>₹ {product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
