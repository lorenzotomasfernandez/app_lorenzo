import { useState } from "react"

    const ItemCount = (props) => {

        const [contador, setContador] = useState(props.init)
    
    const producto = props.stock > 0


    const sumar = () => {

        if(contador < props.stock){
            setContador(contador + 1) 
        }
    }

    const restar = () => {
        
        if( contador > 1){
            setContador(contador - 1)
        }
    }
    
    const addToCart = () => {
        console.log("Ok")
        }

    return (
        <div>
            <h4>{props.name}</h4>
            <p>Hay {props.stock} en stock</p>
            <button onClick={sumar}>+</button>
            <input value={contador} init={props.init}/>
            <button onClick={restar}>-</button>
            <div>
                <button onClick={addToCart}>Agregar al carrito</button>
            </div>
        </div>
    )
}    

export default ItemCount
