import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    return (
        <div>
            <p>{props.productos.name}</p>
            <p>${props.productos.precio}</p>
            <img src={props.productos.img}></img>
            <ItemCount stock={props.productos.stock} init={1}/>
        </div>
)
}

export default ItemDetail