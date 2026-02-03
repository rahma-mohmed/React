import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function ProductDetails() {
     const { id } = useParams();
     const [product, setProduct] = useState(null);

     useEffect(() => {
          axios.get(`https://fakestoreapi.com/products/${id}`)
               .then((response) => {
                    setProduct(response.data);
               })
               .catch((error) => {
                    console.error("Error fetching product details:", error);
               });
     }, [id]);

     if (!product) return <p>Loading product details...</p>;

     return (
          <div className="container mt-4">
               <h2>{product.title}</h2>
               <div className="row">
                    <div className="col-md-6">
                         <img
                         src={product.image}
                         alt={product.title}
                         className="img-fluid"
                         style={{ maxHeight: "400px", objectFit: "contain" }}
                    />
                    </div>
                    <div className="col-md-6">
                         <h4>Description</h4>
                         <p>{product.description}</p>
                         <h5>Price: ${product.price}</h5>
                         <p>Category: {product.category}</p>
                    </div>
               </div>
          </div>
     );
}
