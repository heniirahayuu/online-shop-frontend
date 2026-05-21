import axios from "axios";

const API = axios.create({
    baseURL : "https://uptight-gossip-bobcat.ngrok-free.dev/api",
});

export const getProducts = () => API.get("/products");
export const getProduct = (id) => API.get(`/products/${id}`);
