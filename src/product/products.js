import React from "react";
import axios from "axios";
import ProductDetails from "../product/details";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstsance from "../axios config/axiosinstance";
import { useSelector } from "react-redux";

export default function Products() {
     const [products, setProducts] = useState([]);
     const loaderState = useSelector((state) => state.isLoading);

     useEffect(() => {
          // Fetch product data from an API or database
          // Example using axios:
          axiosInstsance.get("products")
               .then((response) => {
                    setProducts(response.data);
               }
               )
               .catch((error) => {
                    console.error("Error fetching product data:", error);
               })}, []);

     return (
          <>
               {
               loaderState && (
                    <div className="loading-overlay">
                         <div className="spinner-border text-primary" role="status">
                              <span className="visually-hidden">Loading...</span>
                         </div>
                    </div>
                    )
               }
          <div className="container mt-4">
          <h2>Our Products</h2>
          <p>Explore our wide range of products tailored to your needs.</p>

          <div className="row">
               {products.map((product) => (
               <div className="col-md-4 mb-4" key={product.id}>
                    <div className="card h-100">
                    <img
                    className="card-img-top"
                    src={product.image}
                    alt={product.title}
                    style={{ height: "300px", objectFit: "contain" }}
                    />

                    <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                         <strong>${product.price}</strong>
                    </p>
                    </div>

                    <div className="card-footer">
                    <small className="text-muted">
                         Category: {product.category}
                    </small>
                    <Link to={`/details/${product.id}`} className="btn btn-primary float-end">
                         Details
                    </Link>
                    </div>
                    </div>
               </div>
               ))}
          </div>
          </div>
          </>
     );
}