import ItemList from './ItemList'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import {getDocs,query,collection,where} from "firebase/firestore"
import { dbFirebase } from '../firebaseConfig';

  export const ItemListContainer = ({}) => {

    const [productos, setProductos] = useState([])
    const {categoria} = useParams()

    useEffect(()=>{
        if(categoria){

          const q = query(collection(dbFirebase,"productos"),where("categoria","==",categoria))

           getDocs(q)
           .then((resp)=> setProductos(resp.docs.map(p=> ({productos:p.catehoria(),id: p.id}))))
           .catch((err)=> console.log(err))
  
        }else{

           getDocs(collection(dbFirebase,"productos"))
           .then((resp)=> setProductos(resp.docs.map(p => ({productos:p.data(),id:p.id}))) )
           .catch((err)=> console.log(err))
        }
      },[categoria])

      console.log(productos)

    return (
        <div className='color'>
            <h2> Cargando... </h2> : <ItemList productos={productos}/>
        </div>      
    )
}

export default ItemListContainer;