import './ItemListContainer.css';

const ItemListContainer = (props) => {

    console.log(props)

    return(
    <h2> ¡Bienvenido {props.nombre} {props.apellido} a mi pagina web!</h2>
  )
}

export default ItemListContainer;