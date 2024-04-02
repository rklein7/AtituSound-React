import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://atitusound202302-production.up.railway.app",
  timeout: 5000, // 5 segundos
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosInstance;
