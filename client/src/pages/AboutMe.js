import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import BioPic from "../images/chrisbiopic.JPG"

function AboutMe(){

  return(
    <div>
      <Container className="aboutMeContainer">
          <Row>
              <Col>
                  <header>
                      <h1>About Me</h1>
                  </header>
              </Col>
          </Row>
          <div id="horizontal-line" />
          <Row>
              <Col lg={4}>
                  <img src={BioPic} alt="Christopher Marti" className="rounded img-thumbnail" />
              </Col>
              <Col lg={8}>
                  <p>
                    Christopher is full stack web developer and has recently received a certificate from the University of Washington Full Stack Web Development Bootcamp. His development abilities so far include: HTML5, CSS, JavaScript, Ajax, Node, MySQL, MongoDB, Express, ReactJS, Handlebars, Webpack and others. Please see his resume, GitHub repositories, and LinkedIn in the Links tab above.  
                  </p>
              </Col>
          </Row>
          <Row>
              <Col>
                  <p>
                    Chris has a very broad education and work history. He was briefly in a mass communication major for Photojournalism before later changing his focus to Medicine. In 2012 he graduated from the University of Minnesota Rochester with a bachelors degree in Science. He worked for 8 years as a Respiratory Therapist at hospitals in Minnesota, Utah, and Washington state.
                  </p>
              </Col>
          </Row>
      </Container>
    </div>


  )
}

export default AboutMe;