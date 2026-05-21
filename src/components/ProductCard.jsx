import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      background: "white",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h3>{product.name}</h3>
      <p><b>Rp {product.price}</b></p>
      <p style={{ color: "#555" }}>{product.description}</p>

      <Link to={`/products/${product._id}`}>
        <button style={{
          marginTop: "10px",
          padding: "8px",
          width: "100%",
          background: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}>
          Lihat Detail
        </button>
      </Link>
    </div>
  );
}