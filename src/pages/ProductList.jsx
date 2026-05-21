import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      
      <h1 style={{ textAlign: "center" }}>Daftar Produk</h1>

      <Link to="/">
        <button style={{ marginBottom: "20px" }}>
          ← Kembali ke Home
        </button>
      </Link>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        {products.map(p => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}