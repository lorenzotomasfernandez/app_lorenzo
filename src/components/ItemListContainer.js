<<<<<<< HEAD
import ItemList from './ItemList'
import { useState, useEffect } from "react"

let productosInicial = [
    { name: "Moto E 20", img:"./imagenes/motoe20.jpg", precio: 30000, stock: 10} ,
    { name: "Moto G 20", img:"./imagenes/motog20.jpg", precio: 45000, stock: 5},
    { name: "Moto One Action", img:"./imagenes/motooneaction.jpg", precio: 50000, stock: 7},
    { name: "Moto G 30", img:"./imagenes/motog30.jpg", precio: 45000, stock: 6},
    { name: "Moto E 7i", img:"./imagenes/motoe7i.png", precio: 35000, stock: 12}

]

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);


    const work = useEffect(()=>{
    
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
})


    return (
        <div className='color'>
            { loading && <h2>Cargando...</h2>}
            <ItemList productos={productosInicial}/>
        </div>      
    )
}

=======
import ItemList from './ItemList'
import { useState, useEffect } from "react"

let productosInicial = [
    { name: "Moto E 20", img:"./imagenes/motoe20.jpg", precio: 30000, stock: 10} ,
    { name: "Moto G 20", img:"./imagenes/motog20.jpg", precio: 45000, stock: 5},
    { name: "Moto One Action", img:"./imagenes/motooneaction.jpg", precio: 50000, stock: 7},
    { name: "Moto G 30", img:"./imagenes/motog30.jpg", precio: 45000, stock: 6},
    { name: "Moto E 7i", img:"./imagenes/motoe7i.png", precio: 35000, stock: 12}

]

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);


    const work = useEffect(()=>{
    
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
})


    return (
        <div className='color'>
            { loading && <h2>Cargando...</h2>}
            <ItemList productos={productosInicial}/>
        </div>      
    )
}

>>>>>>> 588989044f3b5750660bc4dfe8821cd01fbb6581
export default ItemListContainer