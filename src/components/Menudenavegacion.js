<<<<<<< HEAD
import React from 'react'
import CartWidget from './CartWidget';
import {Nav,Navbar,NavDropdown,Container} from "react-bootstrap";

export const Menudenavegacion = () => {
  return (
    <Navbar bg="dark" expand="lg" variant='dark' >
  <Container fluid>
    <Navbar.Brand href="#">L&F</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavDropdown title="Productos" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action1">Motorola</NavDropdown.Item>
          <NavDropdown.Item href="#action2">Samsung</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Xiaomi</NavDropdown.Item>
          <NavDropdown.Item href="#action4">LG</NavDropdown.Item>
          <NavDropdown.Item href="#action5">Huawei</NavDropdown.Item>
          <NavDropdown.Item href="#action6">Lenovo</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#action7">Contacto</Nav.Link>
        <Nav.Link href="#action8">Preguntas frecuentes</Nav.Link>
      </Nav>
      <CartWidget/>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Menudenavegacion;
=======
import React from 'react'
import CartWidget from './CartWidget';
import {Nav,Navbar,NavDropdown,Container} from "react-bootstrap";

export const Menudenavegacion = () => {
  return (
    <Navbar bg="dark" expand="lg" variant='dark' >
  <Container fluid>
    <Navbar.Brand href="#">L&F</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavDropdown title="Productos" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action1">Motorola</NavDropdown.Item>
          <NavDropdown.Item href="#action2">Samsung</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Xiaomi</NavDropdown.Item>
          <NavDropdown.Item href="#action4">LG</NavDropdown.Item>
          <NavDropdown.Item href="#action5">Huawei</NavDropdown.Item>
          <NavDropdown.Item href="#action6">Lenovo</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#action7">Contacto</Nav.Link>
        <Nav.Link href="#action8">Preguntas frecuentes</Nav.Link>
      </Nav>
      <CartWidget/>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Menudenavegacion;
>>>>>>> 588989044f3b5750660bc4dfe8821cd01fbb6581
