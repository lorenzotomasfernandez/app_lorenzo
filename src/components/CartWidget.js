import React from 'react'
import { BiCart } from "react-icons/bi";
import { Link } from 'react-router-dom'

function CartWidget() {
  return (
    <Link to="/Cart">
       <h1><a href=''><BiCart id="cartIcon"/></a></h1>
    </Link>
  )
  }

export default CartWidget