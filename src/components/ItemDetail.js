import React, { useContext } from 'react'
import { cartContext } from '../context/CartContext'
import ItemCount from "./ItemCount";
import { Link  } from "react-router-dom";
import {Button} from "react-bootstrap";
import {useState} from "react";
import "./ItemDetail.css"

const ItemDetail = ({producto}) => {

    const {addItem} = useContext(cartContext);
    const [select, setSelect] = useState(false);
 
    const onAdd = (unidad) => {

      addItem(producto, unidad)
        if (unidad !== undefined) {
            setSelect(unidad);
          }
          console.log("Añadido: " + unidad + " al carrito");
        };

    return (
        <div className='centrarproducto'>
          <img src={producto.img}></img>
          <div className='descripcion'>
            <p className='nombre'>{producto.name}</p>
            <p className='precio'>${producto.precio}</p>
            {select ? (
                <Button variant="primary" as={Link} to="/Cart">Ir al carrito</Button>
          ) : (
            <ItemCount stock={producto.stock} onAdd={onAdd} init={1}/>
          )}
         </div>
            
        </div>
)
}

export default ItemDetail