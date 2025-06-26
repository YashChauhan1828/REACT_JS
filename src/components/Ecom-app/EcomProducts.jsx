import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./EcomProducts.css"; // 👈 Link to custom CSS

export const EcomProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:9999/api/public/userproducts").then((res) => {
      console.log(res.data)  
      setProducts(res.data.products);
    });
  }, []);

  const addToCart = (id) => {
    axios
      .get(`http://localhost:9999/addtocart/${id}`, {
        headers: {
          authToken: localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("🛒 Item added successfully", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
            transition: Bounce,
          });
        }
      });
  };

  const viewProduct = (id) => {
    navigate(`/userproductview/${id}`);
  };

  return (
    <div className="dark-container">
      <ToastContainer />
      <h1 className="dark-heading">🛍️ Product List</h1>

      <div className="product-grid">
        {products?.map((product) => (
          <div key={product.productId} className="product-card">
            <h2 className="product-name">{product.productName}</h2>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-price">₹ {product.price}</p>
            <div className="button-group">
              <button onClick={() => addToCart(product.productId)} className="btn btn-primary">
                Add to Cart
              </button>
              <button onClick={() => viewProduct(product.productId)} className="btn btn-secondary">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
