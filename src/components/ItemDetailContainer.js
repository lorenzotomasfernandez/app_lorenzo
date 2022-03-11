import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'

let item =  { name: "Moto E 20", img:"./imagenes/motoe20.jpg", precio: 30000, stock: 10}

const ItemDetailCont = () => {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
    const work = 
    
    new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(item)
        }, 3000)
    })
    .then((respuesta)=>{
        setProductos(item)
    })
    .finally(()=>{
        setLoading(false)
    })
})

    return(
        <div>
           { loading && <h2>Cargando...</h2>}
            <ItemDetail productos={productos}/>
        </div>
    )
}

export default ItemDetailCont