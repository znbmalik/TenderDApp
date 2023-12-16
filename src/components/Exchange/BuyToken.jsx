import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import buyImage from "../../assets/images/buy-image.jpg";

const BuyToken = () => {
  return (
    <div>
      <Container className="my-5">
        <Card>
          <Card.Header>
            <h3>Buy Token</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={3}>
                <Card className="mt-sm-4">
                  <Card.Img variant="top" src={buyImage} />
                  <Card.Body>
                    <Card.Title>Tom & Jerry</Card.Title>
                    <Card.Text>
                      <strong>
                        0.19 <span className="me-2"> ETH</span>
                      </strong>
                      <small>
                        Last Sale: 0.17 <span>ETH</span>
                      </small>
                    </Card.Text>
                    <div className="d-grid">
                      <Button variant="primary">Buy Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="mt-sm-4">
                  <Card.Img variant="top" src={buyImage} />
                  <Card.Body>
                    <Card.Title>Tom & Jerry</Card.Title>
                    <Card.Text>
                      <strong>
                        0.19 <span className="me-2"> ETH</span>
                      </strong>
                      <small>
                        Last Sale: 0.17 <span>ETH</span>
                      </small>
                    </Card.Text>
                    <div className="d-grid">
                      <Button variant="primary">Buy Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="mt-sm-4">
                <Card>
                  <Card.Img variant="top" src={buyImage} />
                  <Card.Body>
                    <Card.Title>Tom & Jerry</Card.Title>
                    <Card.Text>
                      <strong>
                        0.19 <span className="me-2"> ETH</span>
                      </strong>
                      <small>
                        Last Sale: 0.17 <span>ETH</span>
                      </small>
                    </Card.Text>
                    <div className="d-grid">
                      <Button variant="primary">Buy Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="mt-sm-4">
                <Card>
                  <Card.Img variant="top" src={buyImage} />
                  <Card.Body>
                    <Card.Title>Tom & Jerry</Card.Title>
                    <Card.Text>
                      <strong>
                        0.19 <span className="me-2"> ETH</span>
                      </strong>
                      <small>
                        Last Sale: 0.17 <span>ETH</span>
                      </small>
                    </Card.Text>
                    <div className="d-grid">
                      <Button variant="primary">Buy Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default BuyToken;
