import React, { useState, createRef } from "react";
import { Form, Button, Row, Popover, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import ModalResult from "./ModalResult";

const Result = () => {
  let [test, setTest] = useState("school test");
  const title = "Result";
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
  return (
    <div className="home">
      <Header />
      <div className="pageBodyResult">
        <h3 className="title">{title}</h3>
        <Form>
          <fieldset>
            <Form.Group as={Row} className="checkbox-result">
              <Form.Check
                className="checkbox"
                onClick={(e) => setTest(e.target.value)}
                defaultChecked
                type="radio"
                label="School test"
                name="formVerticalRadios"
                id="formVerticalRadios1"
                value="school test"
              />
              <Form.Check
                onClick={(e) => setTest(e.target.value)}
                type="radio"
                label="class test"
                name="formVerticalRadios"
                id="formVerticalRadios2"
                value="class test"
              />
            </Form.Group>
          </fieldset>
          <div>
            {test === "class test" ? (
              <div className="class-test-btns">
                <Link to="/enterMarks">
                  <button
                    className="upper-button"
                    onClick={handleShow}
                    type="submit"
                  >
                    Test details
                  </button>
                </Link>
                <Button className="upper-button" onClick={handleShow}>
                  Enter New Test
                </Button>
                <ModalResult show={show} handleShow={handleShow} type={test} />
              </div>
            ) : (
              <div className="school-test-button">
                <Button
                  className="upper-button"
                  onClick={handleShow}
                  variant="primary"
                >
                  Enter new marks
                </Button>
                <ModalResult show={show} handleShow={handleShow} type={test} />
              </div>
            )}
          </div>
          <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Label>Exam name</Form.Label>
            <Form.Control as="select" size="sm">
              <option></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Row>
            <Form.Group
              className="row-first-form"
              // controlId="exampleForm.SelectCustomSizeSm"
            >
              <Form.Label>Class</Form.Label>
              <Form.Control as="select" size="sm">
                <option></option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group
              className="row-second-form"
              // controlId="exampleForm.SelectCustomSizeSm"
            >
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
          <Form.Group
            className="last-form"
            // controlId="exampleForm.SelectCustomSizeSm"
          >
            <Form.Label>Subject</Form.Label>
            <Form.Control className="row-second-form2" as="select" size="sm">
              <option></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group
            className="last-form"
            // controlId="exampleForm.SelectCustomSizeSm"
          >
            <Form.Label>Students name</Form.Label>
            <Form.Control as="select" size="sm">
              <option></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          {test === "school test" ? (
            <Link to="/schoolResult">
              <Button
                className="button-inder-page"
                variant="primary"
                type="submit"
              >
                Search
              </Button>
            </Link>
          ) : (
            <Link to="/classResult">
              <Button
                className="button-inder-page"
                variant="primary"
                type="submit"
              >
                Search
              </Button>
            </Link>
          )}
        </Form>
      </div>
    </div>
  );
};

export default Result;
