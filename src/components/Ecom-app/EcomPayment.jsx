import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const EcomPayment = () => {
const location = useLocation();
const price = location.state?.price;
const navigate = useNavigate()
const [formData, setFormData] = useState({
        creditcardnumber: "",
        date: "",
        cvv: ""
    });

    const [errors, setErrors] = useState({
        CardError: "",
        DateError: "",
        CVVError: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
         
        // Basic Validation
        const newErrors = {};
        if (!formData.creditcardnumber.match(/^\d{15}$/)) {
            newErrors.CardError = "Invalid card number";
        }
        if (!formData.date.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
            newErrors.DateError = "Invalid date format";
        }
        if (!formData.cvv.match(/^\d{3}$/)) {
            newErrors.CVVError = "Invalid CVV";
        }

      
        
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Send data to backend
            
            const finalFormData = {
            ...formData,
            price: price
            };
            // console.log("Form Data Submitted", { ...formData, price: price });

            const res = await axios.post("http://localhost:9999/epayment",finalFormData,{
             headers: {
                authToken: localStorage.getItem("authToken")
            }
        })
        console.log(res.data)
        navigate("/success")
        }
    };

    return (
        <div>
            {/* Main Content */}
            <div className="container mt-5">
                <h2 className="mb-4 text-center">💳 Secure Checkout</h2>

                <div className="card shadow p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Final Amount (₹)</label>
                            <input type="text" name="price" className="form-control" value={price} readOnly />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Credit Card Number</label>
                            <input
                                type="text"
                                name="creditcardnumber"
                                className="form-control"
                                value={formData.creditcardnumber}
                                onChange={handleChange}
                                placeholder="Enter your credit card number"
                            />
                            <div className="text-danger small">{errors.CardError}</div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Expiry Date (MM/YY)</label>
                                <input
                                    type="text"
                                    name="date"
                                    className="form-control"
                                    value={formData.date}
                                    onChange={handleChange}
                                    placeholder="e.g. 08/27"
                                />
                                <div className="text-danger small">{errors.DateError}</div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">CVV</label>
                                <input
                                    type="text"
                                    name="cvv"
                                    className="form-control"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    placeholder="e.g. 123"
                                />
                                <div className="text-danger small">{errors.CVVError}</div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 mt-3">Pay Now</button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white mt-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>About E-Shop</h5>
                            <p>E-Shop is your one-stop online store for electronics, fashion, and more. We deliver quality products with fast and secure service.</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="/ehome" className="text-white text-decoration-none">Home</a></li>
                                <li><a href="/userproducts" className="text-white text-decoration-none">Products</a></li>
                                <li><a href="/mycart" className="text-white text-decoration-none">My Cart</a></li>
                                <li><a href="/inputmail" className="text-white text-decoration-none">Checkout</a></li>
                                <li><a href="/logout" className="text-white text-decoration-none">Logout</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <p>
                                📍 Surat, Gujarat, India<br />
                                📞 +91 98765 43210<br />
                                ✉️ support@eshop.com
                            </p>
                            <div>
                                <a href="#" className="text-white me-3">Facebook</a>
                                <a href="#" className="text-white me-3">Twitter</a>
                                <a href="#" className="text-white">Instagram</a>
                            </div>
                        </div>
                    </div>
                    <hr className="border-light mt-4" />
                    <div className="text-center">&copy; 2025 E-Shop. All rights reserved.</div>
                </div>
            </footer>
        </div>
    );
};
