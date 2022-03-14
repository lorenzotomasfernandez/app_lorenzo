import React from 'react'
import CartWidget from './CartWidget';
import { Link , NavLink } from "react-router-dom";
import {Nav,Navbar,NavDropdown,Container} from "react-bootstrap";
import ItemListContainer from './ItemListContainer';

export const Menudenavegacion = () => {
  return (
       
       <Navbar bg="dark" expand="lg" variant='dark' >
           <Container fluid>
             <Navbar.Brand href="#"><Link to="/">L&F</Link></Navbar.Brand>
             <Navbar.Toggle aria-controls="navbarScroll" />
             <Navbar.Collapse id="navbarScroll">
               <Nav
                 className="me-auto my-2 my-lg-0"
                 style={{ maxHeight: '100px' }}
                 navbarScroll
               >
                 <NavDropdown title="Productos" id="navbarScrollingDropdown">
                   <NavDropdown.Item href="#action1"><NavLink to="/categoria/:id" element={<ItemListContainer/>}>Motorola</NavLink></NavDropdown.Item>
                   <NavDropdown.Item href="#action2"><NavLink to="/categoria/:id" element={<ItemListContainer/>}>Samsung</NavLink></NavDropdown.Item>
                   <NavDropdown.Item href="#action3"><NavLink to="/categoria/:id" element={<ItemListContainer/>}>Xiaomi</NavLink></NavDropdown.Item>
                   <NavDropdown.Item href="#action4"><NavLink to="/categoria/:id" element={<ItemListContainer/>}>LG</NavLink></NavDropdown.Item>
                   <NavDropdown.Item href="#action5"><NavLink to="/categoria/:id" element={<ItemListContainer/>}>Huawei</NavLink></NavDropdown.Item>
                   <NavDropdown.Item href="#action6"><NavLink to="/categoria/:id" element={<ItemListContainer/>}>Lenovo</NavLink></NavDropdown.Item>
                 </NavDropdown>
                 <Nav.Link href="#action7">Contacto</Nav.Link>
                 <Nav.Link href="#action8">Preguntas frecuentes</Nav.Link>
               </Nav>
               <Link to="/Carrito">
                  <CartWidget/>
                </Link>
             </Navbar.Collapse>
           </Container>
       </Navbar>
  )
}

export default Menudenavegacion;
