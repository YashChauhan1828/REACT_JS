import axios from "axios";
import React, { useEffect, useState } from "react";
import "./EcomOrderHistory.css"; // Import CSS file

export const EcomOrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9999/orderhistory", {
        headers: {
          authToken: localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        setOrders(res.data.products);
      })
      .catch((err) => {
        console.error("Error fetching order history", err);
      });
  }, []);

  return (
    <div className="order-container">
      <h1 className="title">🧾 Order History</h1>

      {orders.length === 0 ? (
        <p className="no-orders">No orders placed yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-card">
            <h2 className="order-id">Order ID: #{order.orderId}</h2>
            <table className="order-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Qty</th>
                  <th>Price (₹)</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Order Date</th>
                </tr>
              </thead>
              <tbody>
                {order.orderitems?.map((item, i) => (
                  <tr key={i}>
                    <td>{item.product.productName}</td>
                    <td>
                      <img
                        src={item.product.productImagePath}
                        alt={item.product.productName}
                        className="product-img"
                      />
                    </td>
                    <td>{item.qty}</td>
                    <td>{item.product.price}</td>
                    <td>{(item.qty * item.product.price).toFixed(2)}</td>
                    <td>{item.status}</td>
                    <td>{item.orderDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
};
