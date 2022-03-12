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
