import React from 'react'
import {Routes,Route} from "react-router-dom"
import Cart from '../Pages/Cart'
import LandingPage from '../Pages/LandingPage'
import Products from '../Pages/Products'
import Login from "../Pages/Login"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
