import React from 'react'
import "./NavBar.css"

export const NavBar = () => {
  return (
    
    <nav>
      <h1>TIENDA ONLINE</h1>
       <ul>
         <li><a href="#">INICIO</a></li>
         <li>
          <a href="#">PRODUCTOS</a>
            <ul className='tamaño'>
              <li><a href='#'>REMERAS</a></li>
              <li><a href='#'>PANTALONES</a></li>
            </ul>
        </li>
         <li><a href="#">CONTACTANOS</a></li>
         <li><a href="#">AYUDA</a></li>
       </ul>
     </nav>
  )
}

export default NavBar;