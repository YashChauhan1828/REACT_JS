import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
export const EcomProducts=()=>
{
    const [products, setProducts] = useState([]);
    const [Image,setImage] = useState([])
    const navigate = useNavigate()
    useEffect(()=>
    {
        axios.get("http://localhost:9999/api/public/userproducts").then((res)=>
        {
            console.log(res.data);
            setProducts(res.data.products);
            console.log(res.status)
            // setImage(res.data.profileImageBase64)
        })
    },[])

const addToCart=(id)=>
{
    axios.get(`http://localhost:9999/addtocart/${id}`,{
        headers:{
                authToken: localStorage.getItem("authToken")
            }
        }).then((res)=>
    {
         if(res.status==200)
                {
                    toast.success('Item added successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                        });
        
                    }
        console.log(res.data);
    })
}

const viewProduct=(id)=>
{
    navigate(`/userproductview/${id}`)
}

    return(
        <div>
            <h1>Product List</h1>
             <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
            <img src={Image.profileImageBase64}></img>

             <div classname="container mt-4">
                <div className="row">
            {
                
                products?.map((product)=>
                {
                    return(
                    <div className="col-lg-4 lg-4">
                        <div className="card h-100 shawdow"> 
                        <p>Id: {product.productId}</p>
                        <p>Name: {product.productName}</p>
                        <p>Category: {product.category}</p>
                        <p>Price: {product.price}</p>
                        <button onClick={()=>addToCart(product.productId)}>Add to Cart</button>
                        <button onClick={()=>viewProduct(product.productId)}>View Product</button>
                    </div>
                        
                    </div>
                    )
                })
            }
            </div>
            </div>
        </div>
    )
}