import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export const EcomSignUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const submithandler = async (data) => {
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profilePicture", data.profilePicture[0]);

    try {
      const res = await axios.post("http://localhost:9999/api/public/esignup", formData);
      setSuccessMsg("✅ Registered successfully! Redirecting...");
      setError("");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      reset();
    } catch (error) {
      const msg = error.response?.data?.message || "Signup failed.";
      setError(msg);
      setSuccessMsg("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-2xl rounded-3xl p-8 w-full max-w-md transition-all duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 drop-shadow mb-6">📝 Sign Up</h2>

        {error && (
          <div className="mb-4 px-4 py-2 bg-red-200 text-red-800 rounded-md shadow-sm text-sm">
            {error}
          </div>
        )}

        {successMsg && (
          <div className="mb-4 px-4 py-2 bg-green-200 text-green-800 rounded-md shadow-sm text-sm">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit(submithandler)} encType="multipart/form-data" className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              {...register("first_name")}
              required
              className="mt-1 w-full px-4 py-2 rounded-xl bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md"
              placeholder="John"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register("email")}
              required
              className="mt-1 w-full px-4 py-2 rounded-xl bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              {...register("password")}
              required
              className="mt-1 w-full px-4 py-2 rounded-xl bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md"
              placeholder="********"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input
              type="file"
              {...register("profilePicture")}
              accept="image/*"
              required
              className="mt-1 block w-full text-sm text-gray-800 bg-white/70 rounded-xl px-4 py-2 shadow-md"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-105 duration-300"
          >
            Create Account
          </button>
        </form>
        <p class="sign-up text-center">Already have an Account?<Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};
