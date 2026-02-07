import axiox from "axios";
import { changeLoader } from "../store/actions";
import store from "../store/store";

const axiosInstsance = axiox.create({
     baseURL: "https://fakestoreapi.com/",
     timeout: 1000,
     headers: { "Content-Type": "application/json" },
});

// Add a request interceptor to include any necessary headers or tokens
axiosInstsance.interceptors.request.use(
     (config) => {
          store.dispatch(changeLoader(true)); // Show loader when a request starts
          return config;
     },
     (error) => {
          return Promise.reject(error);
     }
);        

// Add a response interceptor to handle responses globally
axiosInstsance.interceptors.response.use(
     (response) => {
          return response;
     },
     (error) => {
          // Handle errors globally, such as logging or showing notifications
          console.error("API Error:", error);
          return Promise.reject(error);
     }
);

export default axiosInstsance;