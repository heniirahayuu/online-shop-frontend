import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{
      height: "100vh",
      backgroundImage: "url('https://images.unsplash.com/photo-1556740714-a8395b3bf30f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9ubGluZSUyMHNob3B8ZW58MHx8MHx8fDA%3D')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "rgba(240, 232, 232, 0.88)",
        padding: "30px",
        borderRadius: "10px",
        color: "black",
        textAlign: "center"
      }}>
        <h1>🛒 Online Shop</h1>
        <p>Temukan produk terbaik</p>

        <Link to="/products">
          <button style={{
            padding: "10px 20px",
            border: "none",
            background: "#007bff",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            Lihat Produk
          </button>
        </Link>
      </div>
    </div>
  );
}