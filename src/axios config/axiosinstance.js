import axiox from "axios";

const axiosInstsance = axiox.create({
     baseURL: "https://fakestoreapi.com/",
     timeout: 1000,
     headers: { "Content-Type": "application/json" },
});

axiosInstsance.interceptors.request.use(
     (config) => {
          // You can add authorization tokens or other headers here if needed   
          return config;
     },
     (error) => {
          return Promise.reject(error);
     }
);        

export default axiosInstsance;