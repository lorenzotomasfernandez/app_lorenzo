import Item from "./Item"
import { useState, useEffect } from "react"

let productosInicial = [
    { name: "Moto E 20", img:"/imagenes/motoe20.jpg", precio: 30000, stock: 10}
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
            {<h2>Loading, please wait...</h2>}
            {productos.map((productosInicial) => {
                return <Item name={productosInicial.name} price={productosInicial.precio} stock={productosInicial.stock} img={productosInicial.img} />
            })}
        </>
    )
}


export default ItemList;
