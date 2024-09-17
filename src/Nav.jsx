import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" fixed="top" id="mainNav">
      <Container>
        <Navbar.Brand href="#page-top">Matt Blackburn Codes</Navbar.Brand>
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
