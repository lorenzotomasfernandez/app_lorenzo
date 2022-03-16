import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'

const productos =  { id : 1, categoria: "motorola" , name: "Moto E 20", img:"./imagenes/motoe20.jpg", precio: 30000, stock: 10}

const productosPromise = new Promise((resolve,rej)=>{

    setTimeout(() => {
      resolve(productos)
    }, 3000);
  })

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const {id} = useParams()

    console.log(id)
    const getItem = ()=>{
        return productosPromise
    }

    useEffect(()=>{ 
        getItem()
        .then((data)=> setProducto(data.filter(p => p.id == id)))
        .catch((err)=> console.log(err))
      },[id])
      console.log(producto)

    return(
        <div>
            <ItemDetail productos={productos}/>
        </div>
    )
}

export default ItemDetailContainer