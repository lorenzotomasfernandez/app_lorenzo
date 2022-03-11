<<<<<<< HEAD
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>${props.precio}</p>
            <img src={props.img}></img>
            <ItemCount stock={props.stock} init={1}/>
        </div>
)
}

=======
import ItemCount from "./ItemCount";S

const ItemDetail = () => {
    return (
        <div>
            <ItemCount/>
        </div>
)
}


>>>>>>> 588989044f3b5750660bc4dfe8821cd01fbb6581
export default ItemDetail;