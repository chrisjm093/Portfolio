import React, { useState } from "react";
import axios from "axios";
import {Container, Row, Col, Form, Button} from "react-bootstrap";

function Contact() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  })

  const handleServerResponse = (ok, msg, form)=> {
    setServerState({
      submitting: false,
      status: {ok, msg}
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    setServerState({ submitting: true});
    axios({
      method: "post",
      url: "https://formspree.io/xeqrwwlo",
      data: new FormData(form)
    })
    .then(r => {
      handleServerResponse(true,"Thank You!", form);
    })
    .catch(r => {
      handleServerResponse(false, r.response.data.error, form);
    });
  };
  return(
      <Container>
        <Row>
          <Col lg="12">
            <h1>Contact</h1>
          </Col>
        </Row>
        <div id="horizontal-line" />
        <Container lg="12">
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control as="textarea" id="nameInput" rows="1" name="name" placeholder="John Smith" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" id="email" name="email" placeholder="name@example.com" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" id="message" name="message" as="textarea" rows="4"></Form.Control>
            </Form.Group>

            <Button type ="submit" variant="primary" disabled={serverState.submitting}>Submit</Button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
  
          </Form>
        </Container>
      </Container>
    )
  }

export default Contact;
