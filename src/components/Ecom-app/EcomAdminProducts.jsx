import axios from "axios";
import React, { useEffect, useState } from "react";
export const EcomAdminProducts=()=>
{
    const [Products, setProducts] = useState([]);
    useEffect(()=>
    {
        axios.get("http://localhost:9999/api/public/products")
        .then((res)=>
        {
            console.log(res.data);
            setProducts(res.data.products)
        })
    },[])
    return(
        <div>
            {
                Products.map((product)=>
                {
                    return(
                        <div>
                            <img src={product.productImagePath} height="200px" width="200px"/>    
                        </div>
                    )
                })
            }
        </div>
    )
}