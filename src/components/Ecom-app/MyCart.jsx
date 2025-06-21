import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const res = await axios.get('/api/cart');
      setCartItems(res.data);
    } catch (err) {
      console.error('Error fetching cart', err);
    }
  };

  const addToCart = async (productId) => {
    try {
      await axios.post(`/api/cart/add?productId=${productId}`);
      fetchCart();
    } catch (err) {
      console.error('Error adding to cart', err);
    }
  };

  const removeItem = async (cartItemId) => {
    try {
      await axios.delete(`/api/cart/item?cartitemId=${cartItemId}`);
      fetchCart();
    } catch (err) {
      console.error('Error removing item', err);
    }
  };

  const increaseQty = async (cartItemId) => {
    try {
      await axios.put(`/api/cart/item/increase?cartitemId=${cartItemId}`);
      fetchCart();
    } catch (err) {
      console.error('Error increasing qty', err);
    }
  };

  const decreaseQty = async (cartItemId) => {
    try {
      await axios.put(`/api/cart/item/decrease?cartitemId=${cartItemId}`);
      fetchCart();
    } catch (err) {
      console.error('Error decreasing qty', err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.cartitemId}>
                <td>{item.product.productName}</td>
                <td>{item.qty}</td>
                <td>₹{item.product.price}</td>
                <td>₹{item.qty * item.product.price}</td>
                <td>
                  <button className="btn btn-sm btn-success mr-2" onClick={() => increaseQty(item.cartitemId)}>+</button>
                  <button className="btn btn-sm btn-warning mr-2" onClick={() => decreaseQty(item.cartitemId)}>-</button>
                  <button className="btn btn-sm btn-danger" onClick={() => removeItem(item.cartitemId)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;
