import Item from "./Item"

const ItemList = (props) => {
    return (
        <div>
            {props.productos.map((productosInicial,index) => {
                return <Item key={index} productosInicial={productosInicial} />
            })}
        </div>
    )
}

export default ItemList;
