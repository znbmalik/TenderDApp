import React from "react";
import { Container, Row, Form, Col, Button, Card } from "react-bootstrap";

import * as Icon from "react-bootstrap-icons";
const ApplyProposal = () => {
  return (
    <div>
      <Container className="my-5">
        <Card>
          <Card.Header>
            <h3>
              {" "}
              <a href="/proposal" className="text-primary">
                <Icon.ArrowLeft />
              </a>{" "}
              Apply Proposal
            </h3>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formDescription">
                <Form.Label column sm="2">
                  Description
                </Form.Label>
                <Col sm="10">
                  <Form.Control as="textarea" placeholder="Description" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  File Upload
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="file" placeholder="Description" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="description">
                <Form.Label column sm="2">
                  Votes Per Account
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Votes Per Account" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="requireMinimumVote"
              >
                <Form.Label column sm="2">
                  Require Minimum Vote
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Require Minimum Vote"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="votingStartTime">
                <Form.Label column sm="2">
                  Voting Start Time
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Voting Start Time" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="votingEndTime">
                <Form.Label column sm="2">
                  Voting End Time
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Voting End Time" />
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

export default ApplyProposal;
