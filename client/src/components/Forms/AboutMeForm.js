import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const AboutMeForm = ({aboutMe, setAboutMe, setCurrentForm}) => {

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setAboutMe({...aboutMe, [name]: value})
    } 


    return (
      <div>
        <>
          <Container>
            <h1>About Me Things</h1>
            <Row>
              <Col>
                <Form>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Introduction</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="introduction"
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Button variant="primary" onClick={() => {setCurrentForm(2)}}>Submit About Me!</Button>{" "}
          </Container>
        </>
      </div>
    );};
  
  export default AboutMeForm;
  