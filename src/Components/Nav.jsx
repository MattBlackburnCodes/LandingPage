import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react'

export default function Navigation(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" fixed="top" id="mainNav">
      <Container className="mainNavStyle">
        <Navbar.Brand href="#page-top"><img src="./assets/img/logo/logo.png" alt="Logo" className="logoPic" /> {props.firstName} {props.lastName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
