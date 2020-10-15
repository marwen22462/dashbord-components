import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalResult = ({ show, handleShow, type }) => {
  return type === "class test" ? (
    <div>
      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Enter new Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="modal-form">
            <Form.Label>Exam</Form.Label>
            <Form.Control as="select" size="sm">
              <option></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="modal-form">
            <Form.Label>Date</Form.Label>
            <Form.Control size="sm"></Form.Control>
          </Form.Group>
          <Form.Row className="modal-row">
            <Form.Group className="modal-form">
              <Form.Label>Class</Form.Label>
              <Form.Control as="select" size="sm">
                <option></option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="modal-form">
              <Form.Label>Section</Form.Label>
              <Form.Control as="select" size="sm">
                <option></option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group className="modal-form">
            <Form.Label>Subject</Form.Label>
            <Form.Control as="select" size="sm">
              <option></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-button" variant="primary" type="submit">
            Add Test
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  ) : (
    <div>
      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Enter new Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="modal-form">
            <Form.Label>Exam</Form.Label>
            <Form.Control as="select" size="sm">
              <option></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Row className="modal-row">
            <Form.Group className="modal-form">
              <Form.Label>Class</Form.Label>
              <Form.Control as="select" size="sm">
                <option></option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="modal-form">
              <Form.Label>Section</Form.Label>
              <Form.Control as="select" size="sm">
                <option></option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group className="modal-form">
            <Form.Label>Subject</Form.Label>
            <Form.Control as="select" size="sm">
              <option></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-button" variant="primary" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalResult;
