import axios from "axios";

const API = axios.create({
    baseURL : "https://uptight-gossip-bobcat.ngrok-free.dev/api",
});

export const getProducts = () => API.get("/products");
export const getProduct = (id) => API.get(`/products/${id}`);

// import axios from "axios";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
// });

// export default api;