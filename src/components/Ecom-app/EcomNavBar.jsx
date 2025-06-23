import React from "react"
import { Link } from "react-router-dom"

export const EcomNavbar = () => 
{
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to = "/EcomSignUp">E-shop</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/home">Home</Link>
        
        
      </li>
      
       <li class="nav-item active">
        <Link class="nav-link" to="/products">Products</Link>
        
      </li>
       <li class="nav-item active">
        <Link class="nav-link" to="/EcomMyCart">MyCart</Link>
        
      </li>
   
      
       <li class="nav-item active">
        <Link class="nav-link" to="/login">Logout</Link>
        
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}