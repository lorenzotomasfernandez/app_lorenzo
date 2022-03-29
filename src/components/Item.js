import React from 'react'
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {

  const {productos,id} = producto;
  console.log(productos,id)

    return (
        
            <Card className="cardList" style={{ width: '15rem' }}>
                <Card.Img variant="top" src={productos.img} />
                <Card.Body>
                  <Card.Title>{productos.name}</Card.Title>
                  <Card.Text>
                    ${productos.precio}
                  </Card.Text>
                  <Link to={`/item/${productos.id}`}><Button variant="success">Ver mas</Button></Link>{' '}
                </Card.Body>
            </Card>
        
    )
}

export default Item;
