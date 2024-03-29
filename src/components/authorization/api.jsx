import axios from "axios";

const api = axios.create({
  baseURL: "https://react-food-delivery-h5oa.onrender.com/api/v1/admin",
});

// https://react-food-delivery-h5oa.onrender.com/api/v1/admin
// Request interceptor for adding the bearer token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessTokenAdmin");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api
