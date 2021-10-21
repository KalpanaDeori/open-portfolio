import { React } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// CSS IMPORT
import "./debakrishna.css";

export const Navigation = () => {
  return (
    <>
      <Navbar className="navigation" bg="light" expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="/" className="navbar--logo">
            Open-Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#header" className="nav--link">
                Header
              </Nav.Link>
              <Nav.Link href="#project" className="nav--link">
                Projects
              </Nav.Link>
              <Nav.Link href="#Contact" className="nav--link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
