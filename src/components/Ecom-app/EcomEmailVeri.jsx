import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { EcomShippingDetails } from "./EcomShippingDetails";
export const EcomEmailVeri=(props)=>
{
    const {register,handleSubmit} = useForm()
    const navigate = useNavigate()
    const submitHandler=async(data)=>
    {
        const formData = new FormData()
        formData.append("email", data.email)
        const res = await axios.post("http://localhost:9999/sendmail",formData,{
            headers:{
                authToken: localStorage.getItem("authToken")
            }
        })
        if(res.status==200)
        {
            <EcomShippingDetails price={props}></EcomShippingDetails>
        }
    } 
    
    return(
        <div>
            Verify your Email
            <form onSubmit={handleSubmit(submitHandler)}>
               <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register("email")}
              required
              className="mt-1 w-full px-4 py-2 rounded-xl bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md"
              placeholder="john@example.com"
            /><br></br>
             <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-105 duration-300"
          >
            verify Email
          </button>
            </form>
        </div>
    )
}