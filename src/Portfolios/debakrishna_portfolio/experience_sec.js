import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// CSS IMPORT
import "./debakrishna.css";

// IMAGE IMPORT
// import bootstrap from "./img/experiences/bootstrap.svg";
import python from "./img/experiences/python.svg";
import django from "./img/experiences/django.svg";
import c from "./img/experiences/c.svg";
import js from "./img/experiences/javascript.svg";

import css from "./img/experiences/css.svg";

export const Experience_sec = () => {
  return (
    <>
      <section className="section" id="section--1">
        <Container>
          <div className="section--intro">
            <h1 className="section--head--text mt-5 text-center">
              MY EXPERIENCE
            </h1>
            <p className="my--intro-text text-secondary text-center">
              Here are some of my experience in different types of softwares and
              frameworks
            </p>
          </div>
          <div className="experience--area">
            <Row className="text-center row">
              <Col>
                <img
                  src={python}
                  alt="experience 1 bootstrap"
                  className="experices--image"
                />
              </Col>
              <Col>
                <img
                  src={js}
                  alt="experience 1 bootstrap"
                  className="experices--image"
                />
              </Col>
              <Col>
                <img
                  src={c}
                  alt="experience 1 bootstrap"
                  className="experices--image"
                />
              </Col>
              
            </Row>
            <Row className="text-center row">
              <Col>
                <img
                  src={django}
                  alt="experience 1 bootstrap"
                  className="experices--image"
                />
              </Col>
             
              <Col>
                <img
                  src={css}
                  alt="experience 1 bootstrap"
                  className="experices--image"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};
