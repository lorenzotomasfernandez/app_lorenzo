import Item from "./Item"
import { useState, useEffect } from "react"

let productosInicial = [
    { name: "Moto E 20", img:"./imagenes/motoe20.jpg", precio: 30000, stock: 10} ,
    { name: "Moto G 20", img:"./imagenes/motog20.jpg", precio: 45000, stock: 5},
    { name: "Moto One Action", img:"./imagenes/motooneaction.jpg", precio: 50000, stock: 7},
    { name: "Moto G 30", img:"./imagenes/motog30.jpg", precio: 45000, stock: 6},
    { name: "Moto E 7i", img:"./imagenes/motoe7i.png", precio: 35000, stock: 12}

]

const ItemList = () => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        setTimeout(() => {
            setProductos(productosInicial);
            setLoading(false);
        }, 2000)
    }, [])

    return (
        <>
            { loading && <h2>Cargando...</h2>}
            {productos.map((productosInicial, index) => {
                return <Item name={productosInicial.name} key={index} precio={productosInicial.precio} stock={productosInicial.stock} img={productosInicial.img} />
            })}
        </>
    )
}

export default ItemList;
