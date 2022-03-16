import ItemList from './ItemList'
import { useState, useEffect } from "react"

let productosInicial = [
    { id : 1, categoria: "motorola" , name: "Moto E 20", img:"./imagenes/motoe20.jpg", precio: 30000, stock: 10} ,
    { id : 2, categoria: "motorola" , name: "Moto G 20", img:"./imagenes/motog20.jpg", precio: 45000, stock: 5},
    { id : 3, categoria: "motorola" , name: "Moto One Action", img:"./imagenes/motooneaction.jpg", precio: 50000, stock: 7},
    { id : 4, categoria: "motorola" , name: "Moto G 30", img:"./imagenes/motog30.jpg", precio: 45000, stock: 6},
    { id : 5, categoria: "motorola" , name: "Moto E 7i", img:"./imagenes/motoe7i.png", precio: 35000, stock: 12},
    { id : 6 , categoria: "samsung" , name: "Samsung S 21", img:"./imagenes/samsungs21.jpg", precio: 30000, stock: 9}
]

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    
    useEffect(()=>{
    
    new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productosInicial)
        }, 3000)
    })
    .then((respuesta)=>{
        setProductos(productosInicial)
    })
    .finally(()=>{
        setLoading(false)
    })
},[])


    return (
        <div className='color'>
            {loading ? <h2> Cargando... </h2> : <ItemList productos={productosInicial}/>}
        </div>      
    )
}

export default ItemListContainer;