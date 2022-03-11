import Item from "./Item"

const ItemList = (props) => {
    return (
        <div>
            {props.productos.map((productosInicial, index) => {
                return <Item name={productosInicial.name} key={index} precio={productosInicial.precio} stock={productosInicial.stock} img={productosInicial.img} />
            })}
        </div>
    )
}

export default ItemList;
