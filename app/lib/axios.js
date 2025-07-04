import axios from "axios";
import { BACKEND_URL } from "./config";

const api = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true, // This works for client-side
});

// Add request interceptor to handle server-side cookies
api.interceptors.request.use(
  async (config) => {
    // Check if we're on the server
    if (typeof window === "undefined") {
      // Server-side: manually get cookies and add to headers
      const { cookies } = await import("next/headers");
      const cookieStore = await cookies();
      const authToken = cookieStore.get("authToken");

      if (authToken) {
        // Add cookie to request headers
        config.headers.Cookie = `authToken=${authToken.value}`;
      }

      console.log("🚀 Server request with cookie:", !!authToken);
    }
    // Client-side: withCredentials handles this automatically

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor for logging
api.interceptors.response.use(
  (response) => {
    if (typeof window === "undefined") {
      console.log("✅ Server response:", response.status, response.config.url);
    }
    return response;
  },
  (error) => {
    if (typeof window === "undefined") {
      console.error(
        "❌ Server error:",
        error.response?.status,
        error.config?.url
      );
    }
    return Promise.reject(error);
  }
);

export default api;
