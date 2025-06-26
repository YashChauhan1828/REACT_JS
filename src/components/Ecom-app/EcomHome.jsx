import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
// import { useParams } from "react-router-dom";

export const EcomHome = ()=>
{
    const [user,setuser] = useState([])
    const navigate = useNavigate() 
    
    useEffect(()=>
    {
        axios.get("http://localhost:9999/ehome",{
            headers:{
                authToken: localStorage.getItem("authToken")
            }
        }).then((res)=>
        {
            // console.log(res.data)
            if(res.data=="please Login")
            {
               toast.warning("Please Login", {
                           position: "top-center",
                           autoClose: 5000,
                           theme: "dark",
                           transition: Bounce,
                         });
               setTimeout(() => {
                navigate("/login");
                }, 2000);
            }
            console.log(res.data)
            setuser(res.data)
        })
        
    },[])
    
    const products = ()=>{
        navigate("/products")
    }
    return(
        <div>
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
            <h1>Welcome Home</h1>
            <h2>Name:{user.firstName}</h2>
            <img src={user.profilePicPath} alt="Profile" width={150}  height={150}
            style={{ objectFit: "cover", borderRadius: "50%" }} />
            <button onClick={()=>{products()}}>Browse Products</button>
        </div>
    )
}