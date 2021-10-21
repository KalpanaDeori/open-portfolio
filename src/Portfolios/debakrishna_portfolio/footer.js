import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
// CSS IMPORT
import "./debakrishna.css";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-dark">
      <Container>
        <Row className="text-center">
          <Col>
            <h4 className="text-light">This is my portfolio</h4>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <Nav.Link href="#Contact" className=" text-muted nav--link">
              Github
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="#Contact" className=" text-muted nav--link">
              Linkedin
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="#Contact" className=" text-muted nav--link">
              Dev
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="#Contact" className=" text-muted nav--link">
              Facebook
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
