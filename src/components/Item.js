import ItemCount from "./ItemCount";


const Item = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <img src={props.img}/>
            <p>Precio: ${props.precio}</p>
            <div>
                <p>Stock disponible: {props.stock}</p>
                <ItemCount init={1} stock={props.stock}/>
            </div>
        </div>
    )
}

export default Item;
