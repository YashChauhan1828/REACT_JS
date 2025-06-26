import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const EcomSuccess = ()=>
{
    const navigate = useNavigate()
    const orderHistory=()=>
    {
        navigate("/orderHistory")
    }
    return(
        <div>
            <h1>Success</h1>
            <Button onClick={()=>orderHistory()}>Order History</Button>
        </div>
    )
}