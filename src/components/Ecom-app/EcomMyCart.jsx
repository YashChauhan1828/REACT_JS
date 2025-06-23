import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EcomEmailVeri } from "./EcomEmailVeri";


export const EcomMyCart = () => {
  const [cart, setCart] = useState([]);
    const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:9999/mycart", {
        headers: {
          authToken: localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setCart(res.data.products);
      });
  }, []);

  const removeItem = async (id) => {
    const res = await axios.delete(`http://localhost:9999/removecartitem/${id}`, {
      headers: {
        authToken: localStorage.getItem("authToken"),
      },
    });

    if (res.data.products.length !== 0) {
      toast.success("Item removed successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    }

    setCart(res.data.products);
  };

  const plusqty = async (id) => {
    const res = await axios.put(`http://localhost:9999/plusqty/${id}`, {}, {
      headers: {
        authToken: localStorage.getItem("authToken"),
      },
    });

    setCart(res.data.products);
  };

  const minusqty = async (id) => {
    const res = await axios.put(`http://localhost:9999/minusqty/${id}`, {}, {
      headers: {
        authToken: localStorage.getItem("authToken"),
      },
    });

    setCart(res.data.products);
  };
const product=()=>
{
    
    navigate(`/products`)
}
  // 🧮 Calculate total cart price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.product.price * item.qty,
    0
  );
const checkout=()=>
{
    
   navigate("/shipping")
}
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🛒 My Cart</h2>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover
        draggable
        theme="dark"
        transition={Bounce}
      />
    
      <table className="table table-dark table-striped text-center align-middle">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Change Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((p) => (
            <tr key={p.cartitemId}>
              <td>{p.product.productName}</td>
              <td>{p.product.category}</td>
              <td>{p.qty}</td>
              <td>₹{p.product.price * p.qty}</td>
              <td>
                <button
                  className="btn btn-sm btn-light me-2"
                  onClick={() => minusqty(p.cartitemId)}
                >
                  −
                </button>
                <button
                  className="btn btn-sm btn-light"
                  onClick={() => plusqty(p.cartitemId)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeItem(p.cartitemId)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="text-end me-2">🧾 Total Price: <span className="text-success">₹{totalPrice}</span></h4>
      <Button onClick={()=>checkout()}>Proceed to Checkout</Button>
      <Button onClick={()=>product()}>Back To Products</Button>
          
    </div>
  );
};
