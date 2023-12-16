import React from "react";
import Web3 from "web3";
import {ca,cabi} from "../../abi";
import {useState} from "react";
import { Container, Row, Form, Col, Button, Card } from "react-bootstrap";

const SellToken = () => {
  return (
    <div>
      <Container className="my-5">
        <Card>
          <Card.Header>
            <h3>Sell Token</h3>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextToken"
              >
                <Form.Label column sm="2">
                  Tokens
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Enter Tokens" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPrice"
              >
                <Form.Label column sm="2">
                  Price
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="number" placeholder="Price" />
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
              <Button className="mt-4">Sell Token</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default SellToken;
