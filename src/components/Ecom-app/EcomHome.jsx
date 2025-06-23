import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
            console.log(res.data)
            setuser(res.data)
        })
        
    },[])
    const products = ()=>{
        navigate("/products")
    }
    return(
        <div>
            <h1>Welcome Home</h1>
            <h2>Name:{user.firstName}</h2>
            <img src={user.profileImageBase64} alt="Profile" width={150}  height={150}
            style={{ objectFit: "cover", borderRadius: "50%" }} />
            <button onClick={()=>{products()}}>Browse Products</button>
        </div>
    )
}