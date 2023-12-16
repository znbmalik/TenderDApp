import React from "react";
import { useState } from "react";
import { Container, Row, Card, Table, Modal, Button } from "react-bootstrap";

const Proposal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Container className="my-5">
        <Card>
          <Card.Header>
            <h3>Proposal</h3>
          </Card.Header>
          <Card.Body>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <a
                      href="#"
                      className="btn-sm me-2 text-primary"
                      onClick={handleShow}
                    >
                      View
                    </a>
                    <a
                      href="/proposal/apply-proposal"
                      className="btn-sm text-success"
                    >
                      Apply
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>
                    <a
                      href="#"
                      className="btn-sm me-2 text-primary"
                      onClick={handleShow}
                    >
                      View
                    </a>
                    <a
                      href="/proposal/apply-proposal"
                      className="btn-sm text-success"
                    >
                      Apply
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>
                    <a
                      href="#"
                      className="btn-sm me-2 text-primary"
                      onClick={handleShow}
                    >
                      View
                    </a>
                    <a
                      href="/proposal/apply-proposal"
                      className="btn-sm text-success"
                    >
                      Apply
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        {/* Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Proposal;
