import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

export const EcomHome = ()=>
{
    const [user,setuser] = useState([])
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
    
    return(
        <div>
            <h1>Welcome Home</h1>
            <h2>Name:{user.firstName}</h2>
            
        </div>
    )
}