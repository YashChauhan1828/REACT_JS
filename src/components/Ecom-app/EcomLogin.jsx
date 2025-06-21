import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const EcomLogin =()=>
{
    const {register,handleSubmit} = useForm()
    const navigate = useNavigate()
    const submitHandler=async(data)=>
        
    {
        try
        {
            const res = await axios.post("http://localhost:9999/api/public/elogin",data)
            const token = res.data.token
            localStorage.setItem("authToken",token)
            navigate(`/home`)
            console.log(res)
        }
        catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        alert("Invalid Credentials");
    }
    }
    return(
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <label>Email: </label><input type="email" class="form-control" {...register("email")} placeholder="Enter your Email"/><br/>
                <label>Password: </label><input type="password" class="form-control" {...register("password")} placeholder="Enter your password"/><br></br>
                 <input type="submit" value="submit"/><br></br>
            </form>
        </div>
    )
}