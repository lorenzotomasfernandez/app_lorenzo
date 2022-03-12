
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import './Item.css';


const Item = (props) => {
    return (
        
            <Card className="cardList" style={{ width: '15rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                  <Card.Title>{props.name}</Card.Title>
                  <Card.Text>
                    ${props.precio}
                  </Card.Text>
                       <Button variant="success">Ver mas</Button>{' '}
                </Card.Body>
            </Card>
        
    )
}

export default Item;
