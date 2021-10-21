import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

export const Project = () => {
  return (
    <section className="section" id="section--2">
      <Container>
        <div className="section--intro" id="#project">
          <h1 className="section--head--text mt-5 text-center">
            MY PROJECT WORKS
          </h1>
          <p className="my--intro-text text-secondary text-center">
            Here are some of my project works.
          </p>
        </div>
        <div className="project--works">
          <Row className="row">
            <Col>
              <Card style={{ width: "18rem" }} className="m-auto card">
                <Card.Body>
                  <Card.Title className="card--title">
                    GUESS THE NUMBER GAME
                  </Card.Title>
                  <Card.Text className="card--text">
                    This is a JavaScript game , Where a number is generated
                    between 1 and 100 and you have to guess which number it is.
                  </Card.Text>
                  <Button
                    href="https://github.com/Debakrishna/js-game"
                    variant="success"
                    className="btn-sm source--code-btn"
                    target="_blank"
                  >
                    Source Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="m-auto card">
                <Card.Body>
                  <Card.Title className="card--title">
                    BLINK WITH PYTHON ARDUINO
                  </Card.Title>
                  <Card.Text>
                    This is a very basic project for arduino with python. with
                    this project we make the LED of the arduino blink.
                  </Card.Text>
                  <Button
                    href="https://github.com/Debakrishna/js-game"
                    variant="success"
                    className="btn-sm source--code-btn"
                    target="_blank"
                  >
                    Source Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
