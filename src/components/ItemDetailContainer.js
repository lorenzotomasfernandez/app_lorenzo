import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'

const productos =  [ {id : 1, categoria: "motorola" , name: "Moto E 20", img:"./imagenes/motoe20.jpg", precio: 30000, stock: 10}]

const productosPromise = new Promise((resolve,rej)=>{

    setTimeout(() => {
      resolve(productos)
    }, 3000);
  })

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const {categoria} = useParams()

    console.log(categoria)
    const getItem = ()=>{
        return productosPromise
    }

    useEffect(()=>{ 
        getItem()
        .then((resolve)=> setProducto(resolve.filter(p => p.categoria == categoria)))
        .catch((err)=> console.log(err))
      },[categoria])
      console.log(producto)

    return(
        <div>
            <ItemDetail productos={productos}/>
        </div>
    )
}

export default ItemDetailContainer