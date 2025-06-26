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

  const wishProduct=(id)=>
  {
    axios.get(`http://localhost:9999/addtowishcart/${id}`,{
      headers:{
        authToken:localStorage.getItem("authToken"),
      }
    }).then((res)=>
    {
      if(res.status===200)
      {
        toast.success("🛒 Item added successfully", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
            transition: Bounce,
          });
      }
    })
  }
  return (
    <div className="dark-container">
      <ToastContainer />
      <h1 className="dark-heading">🛍️ Product List</h1>

      <div className="product-grid">
        {products?.map((product) => (
          <div key={product.productId} className="product-card">
            <img src={product.productImagePath} className="product-image"/>
            <h2 className="product-name">{product.productName}</h2>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-price">₹ {product.price}</p>
            <div className="button-group">
              <button onClick={() => addToCart(product.productId)} className="btn btn-primary">
                <i className="fas fa-cart-plus"></i> 
              </button>
              <button onClick={() => viewProduct(product.productId)} className="btn btn-secondary">
                <i className="fas fa-eye"></i> 
              </button>
              <button onClick={() => wishProduct(product.productId)} className="btn btn-secondary">
                <i className="fas fa-heart"></i> 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
