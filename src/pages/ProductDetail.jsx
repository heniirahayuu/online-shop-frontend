import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../api/productApi";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      
      <Link to="/products">← Kembali</Link>

      <div style={{
        marginTop: "20px",
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        textAlign : "left"
      }}>
        <h1>{product.name}</h1>
        <h2>Rp {product.price}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
}