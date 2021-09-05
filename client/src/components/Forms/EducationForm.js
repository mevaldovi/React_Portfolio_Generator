import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const EducationForm = () => {

    const [edu, setEdu] = useState({})


    return (
      <div>
          <>
            <Container>
            <h1>Education Things</h1>
                <Row>
                    <Col>
                        <Form>
                            <Form.Control type="text" placeholder="Institution" />
                            <Form.Control type="text" placeholder="Degree" />
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Control type="date" placeholder="Graduation Date" />
                            {/* <Form.Control type="text" placeholder="Certifications" />  */}
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
                <Button variant="primary">Submit Education!</Button>{' '}
            </Container>
          </>
        </div>
        )};
  
  export default EducationForm;
  