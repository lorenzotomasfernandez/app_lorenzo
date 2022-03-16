import React from 'react'
import CartWidget from './CartWidget';
import {Nav,Navbar,NavDropdown,Container} from "react-bootstrap";
import { Link } from "react-router-dom"

export const Menudenavegacion = () => {
  return (

    <header>
       <Navbar bg="dark" expand="lg" variant='dark' >
           <Container fluid>
            <Link to="/"><Navbar.Brand>L&F</Navbar.Brand></Link>
             <Navbar.Toggle aria-controls="navbarScroll" />
             <Navbar.Collapse id="navbarScroll">
               <Nav
                 className="me-auto my-2 my-lg-0"
                 style={{ maxHeight: '100px' }}
                 navbarScroll
               >
                 <NavDropdown title="Productos" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/categoria/motorola">Motorola</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/categoria/samsung">Samsung</NavDropdown.Item>
                 </NavDropdown>
               </Nav>
                  <CartWidget/>
             </Navbar.Collapse>
           </Container>
       </Navbar>
    </header>
  )
}

export default Menudenavegacion;
