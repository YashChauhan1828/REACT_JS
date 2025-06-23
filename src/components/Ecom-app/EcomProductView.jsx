import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const EcomProductView=()=>
{
    const id = useParams().id
    const [product, setProduct] = useState({});
    useEffect(()=>
    {
        axios.get(`http://localhost:9999/api/public/userproductview/${id}`,{
           
        }).then((res)=>{
            console.log(res.data)
            setProduct(res.data.product) 
        })
    },[id])
    return(
        <div>
            <p>Name:{product.productName}</p>
            <p>Category:{product.category}</p>
            <p>Price:{product.price}</p>
        </div>
    )
}