import React, { useState, createRef } from "react";
import { Form, Button, Row, Popover, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";

const Result = () => {
  let [test, setTest] = useState("school test");
  const title = "Result";
  const ref = createRef(); 
  console.log(test);
  return (
    <div className="home">
      <Header />
      <div className="pageBodyResult">
        <h3 className="title">{title}</h3>
        <Form>
          <fieldset>
            <Form.Group as={Row} className="checkbox-result">
              <Form.Check
                onClick={(e) => setTest(e.target.value)}
                type="radio"
                defaultChecked
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
              <div  className="result-upper-btns">
                <Link to="/enterMarks">
                  <button className="upper-button" type="submit">
                    Test details
                  </button>
                </Link>
                <OverlayTrigger  
                  trigger="click"
                  key="left"
                  placement="left"
                  overlay={
                    <Popover  id="popover-positioned-left">
                      <Popover.Title as="h3">Enter new Test</Popover.Title>
                      <Popover.Content>
                        <Form.Group
                          className="popover-form"
                          // controlId="exampleForm.SelectCustomSizeSm"
                        >
                          <Form.Label>Exam</Form.Label>
                          <Form.Control as="select" size="sm">
                            <option></option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group
                          className="popover-form"
                          // controlId="exampleForm.SelectCustomSizeSm"
                        >
                          <Form.Label>Date</Form.Label>
                          <Form.Control  size="sm">
                          </Form.Control>
                        </Form.Group>
                        <Form.Row className="popover-row">
                          <Form.Group
                            className="popover-form"
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
                            className="popover-form"
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
                        <Form.Group className="popover-form">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control as="select" size="sm">
                            <option></option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                        <Button
                          className="popover-button"
                          variant="primary"
                          type="submit"
                        >
                          Add Test
                        </Button>
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <Button className="upper-button">Enter New Test</Button>
                </OverlayTrigger>
                  
              </div>
            ) : (
              <div  className="school-test-button">
                <OverlayTrigger  
                  trigger="click"
                  key="left"
                  placement="left"
                  overlay={
                    <Popover  id="popover-positioned-left">
                      <Popover.Title as="h3">Add New Makrs</Popover.Title>
                      <Popover.Content>
                        <Form.Group
                          className="popover-form"
                          // controlId="exampleForm.SelectCustomSizeSm"
                        >
                          <Form.Label>Exam</Form.Label>
                          <Form.Control as="select" size="sm">
                            <option></option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Row className="popover-row">
                          <Form.Group
                            className="popover-form"
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
                            className="popover-form"
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
                        <Form.Group className="popover-form">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control as="select" size="sm">
                            <option></option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                        <Button
                          className="popover-button"
                          variant="primary"
                          type="submit"
                        >
                          Save
                        </Button>
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <Button  className="upper-button" variant="primary">Enter new marks</Button>
                </OverlayTrigger>
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
          <Link to="/schoolResult">
            <Button className="button-inder-page" variant="primary" type="submit">
              Save
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Result;
