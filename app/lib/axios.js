import axios from "axios";
import { BACKEND_URL } from "./config";

const api = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true, // ⬅️ enables cookies to be sent/received
});

export default api;
