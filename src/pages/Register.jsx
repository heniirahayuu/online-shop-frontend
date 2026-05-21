import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://uptight-gossip-bobcat.ngrok-free.dev/api/auth/register",
        form
      );

      alert("Registrasi berhasil!");
      navigate("/login");

    } catch (error) {
      alert("Registrasi gagal");
      console.log(error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h1 style={styles.title}>Register</h1>

        <form onSubmit={handleSubmit} style={styles.form}>

          <input
            type="text"
            name="name"
            placeholder="Nama"
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Register
          </button>

        </form>

        <p style={styles.text}>
          Sudah punya akun?{" "}
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },

  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  title: {
    textAlign: "center",
    marginBottom: "25px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },

  button: {
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#111827",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },

  text: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "14px",
  },

  link: {
    color: "#2563eb",
    textDecoration: "none",
  },
};
