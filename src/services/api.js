import axios from "axios";

const API = axios.create({
  baseURL: "https://recipe-book-backend-e6ad.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach the JWT token (if the user is logged in)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;