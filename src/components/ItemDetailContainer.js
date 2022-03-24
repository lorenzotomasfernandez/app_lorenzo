import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import ItemDetail from './ItemDetail'

const productos =   [
    { id : 1, categoria: "motorola" , name: "Moto E 20", img:"../imagenes/motoe20.jpg", precio: 30000, stock: 10} ,
    { id : 2, categoria: "motorola" , name: "Moto G 20", img:"../imagenes/motog20.jpg", precio: 45000, stock: 5},
    { id : 3, categoria: "motorola" , name: "Moto One Action", img:"../imagenes/motooneaction.jpg", precio: 50000, stock: 7},
    { id : 4, categoria: "motorola" , name: "Moto G 30", img:"../imagenes/motog30.jpg", precio: 45000, stock: 6},
    { id : 5, categoria: "motorola" , name: "Moto E 7i", img:"../imagenes/motoe7i.png", precio: 35000, stock: 12},
    { id : 6, categoria: "samsung" , name: "Samsung S21", img:"../imagenes/samsungs21.jpg", precio: 30000, stock: 9},
    { id : 7, categoria: "samsung" , name: "Samsung A32", img:"../imagenes/samsunga32.jpg", precio: 128000, stock: 10},
    { id : 8, categoria: "samsung" , name: "Samsung A12", img:"../imagenes/samsunga21.jpg", precio: 78000, stock: 5},
    { id : 9, categoria: "samsung" , name: "Samsung A10", img:"../imagenes/samsunga10.jpg", precio: 29000, stock: 8},
    { id : 10, categoria: "samsung" , name: "Samsung A51", img:"../imagenes/samsunga51.jpg", precio: 46000, stock: 4}
]
const productosPromise = new Promise((resolve,rej)=>{

    setTimeout(() => {
      resolve(productos)
    }, 3000);
  })

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    console.log(id)
    const getItem = ()=>{
        return productosPromise
    }

    useEffect(()=>{
      getItem()
        .then((resolve) => {
          setProducto(resolve.filter(p=> p.id == id))
          setLoading(false)
      })
      
      .catch(toast.error("Error al intentar cargar los productos"))
     },[id])
     console.log(producto)


    return(
        <div>
            {
              loading ? <span> Cargando... </span> : <ItemDetail producto={producto}/>
            }
        </div>
    )
}

export default ItemDetailContainer