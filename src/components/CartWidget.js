import React, { useContext } from 'react'
import { BiCart } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { cartContext } from '../context/CartContext'

function CartWidget() {
  const {cart} = useContext(cartContext)
  return (
    <Link to="/Cart">
       <h1><BiCart id="cartIcon"/>{cart.length}</h1>
    </Link>
  )
  }

export default CartWidget