import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
export default function NavbarComponent() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">FOSSASIA | Flappy Bird </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Developer</Nav.Link>
              <NavDropdown title="Download" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Desktop</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Mobile</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Documentation</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
