import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useToast } from "@chakra-ui/core";
const Example= ()=> {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "pop-up created.",
          description: "this is the pop-up with auto hide after 9s",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Pop-UP
    </Button>
  );
}

const Result = () => {
  let [test, setTest] = useState("school test");
  const title = "Result";
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
                <div className="result-upper-btns">
                  <Link to="/enterMarks">
                    <button className="upper-button" type="submit">
                      Test details
                    </button>
                  </Link>
                  <Link to="/enterMarks">
                    <button className="upper-button" type="submit">
                      Enter new marks
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="school-test-button">
                <Link to="/enterMarks">
                  <button className="upper-button" type="submit">
                    Enter new marks
                  </button>
                </Link>
                </div>
              )
            }
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
              controlId="exampleForm.SelectCustomSizeSm"
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
              controlId="exampleForm.SelectCustomSizeSm"
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
            controlId="exampleForm.SelectCustomSizeSm"
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
            controlId="exampleForm.SelectCustomSizeSm"
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
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Link>
          {Example()}
        </Form>
      </div>
    </div>
  );
};

export default Result;
