import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../API/Loading";
export const EcomOtpVerification=()=>
{
    const otp = useParams().otp
    const [isloading,setisLoading] = useState(false)
    const {register,handleSubmit} = useForm()
    const navigate = useNavigate()
    const location = useLocation();
    const price = location.state?.price;
    const submitHandler=(data)=>
    {
        if(otp===data.otp)
        {
            setisLoading(true)
            setTimeout(()=>navigate("/shipping",{ state: { price } }),3000)
            
        }
        else
        {
            alert("Inavlid Otp")
        }
    }
    return(
        <div>
            {
                isloading&&<Loading></Loading>
            }
            <form onSubmit={handleSubmit(submitHandler)}>
                Enter Otp: <input type="text" {...register("otp")}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}