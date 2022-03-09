import ItemCount from "./ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import './Item.css';


const Item = (props) => {
    return (
        
            <Card className="cardList" style={{ width: '15rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                  <Card.Title>{props.name}</Card.Title>
                  <Card.Text>
                    <h6>${props.precio}</h6>
                  </Card.Text>
                  <ItemCount init={1} stock={props.stock}/>
                </Card.Body>
            </Card>
        
    )
}

export default Item;
