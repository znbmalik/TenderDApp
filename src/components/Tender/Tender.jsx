import React from "react";
import { Container, Row, Form, Col, Button, Card } from "react-bootstrap";

const Tender = () => {
  return (
    <div>
      <Container className="my-5">
        <Card>
          <Card.Header>
            <h3>Tender</h3>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="email" placeholder="Name" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="description">
                <Form.Label column sm="2">
                  Description
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Description" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="description">
                <Form.Label column sm="2">
                  Status
                </Form.Label>
                <Col sm="10">
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Button className="mt-4">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Tender;
