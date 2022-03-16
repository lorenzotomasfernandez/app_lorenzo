import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    return (
        <div>
            <p>{producto[0].name}</p>
            <p>${producto[0].precio}</p>
            <img src={producto[0].img}></img>
            <ItemCount stock={producto[0].stock} init={1}/>
        </div>
)
}

export default ItemDetail