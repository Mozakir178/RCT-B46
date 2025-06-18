import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import { auth } from "../firebase";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const limit = 4;

  const [searchParams, setSearchParams] = useSearchParams();

  // 🟡 Get initial values from URL or fallback
  const category = searchParams.get("category") || "all";
  const page = Number(searchParams.get("page")) || 1;

  // 🔹 Fetch categories once
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        // if array of strings
        if (Array.isArray(data) && typeof data[0] === "string") {
          setCategories(data);
        } else {
          setCategories(data.map((el) => el.name || el.slug));
        }
      });
  }, []);

  // 🔹 Fetch products whenever `page` or `category` changes
  useEffect(() => {
    setLoading(true);
    let baseUrl = `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`;

    if (category !== "all") {
      baseUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${(page - 1) * limit}`;
    }

    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalProducts(data.total);
        setLoading(false);
      });
  }, [page, category]);

  const totalPages = Math.ceil(totalProducts / limit);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setSearchParams({ category: selected, page: 1 });
  };
  const handlePageChange = (newPage) => {
    setSearchParams({ category, page: newPage });
  };

  if (loading) return <h3 style={{ padding: "1rem" }}>Loading...</h3>;

  return (
    <div style={{ padding: "1rem" , width: "75%" , margin: "auto"}}>
      <div style={{margin: "auto"}}>
      <h2 >Products</h2>
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      </div>

      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {products.map((prod) => (
          <div
            key={prod.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "6px",
              
            }}
          >
            <img
              src={prod.thumbnail}
              alt={prod.title}
              width="40%"
              height="150px" style={{margin: "auto", display: "block"}}
            />
            <Link style={{margin: "auto" , display: "block" , width: "fit-content"}} Link to={`/products/${prod.id}`}><h4>{prod.title}</h4> </Link>
            <p style={{margin: "auto" , display: "block" , width: "fit-content"}}>₹ {prod.price}</p>
          </div>
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Products;
