import React from "react";
import Header from "./Header";
import { Form, Table, Button } from "react-bootstrap";

const EnterMarks = ({ MarksTable }) => {
  const title = "Marks >  Enter Marks";
  return (
    <div className="home">
      <Header />
      <div className="containerPages">
        <div className="pageBodyResult">
          <h6 className="title">{title}</h6>
          <h4>Enter Marks</h4>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Label>Subject</Form.Label>
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
                className="market-row-first-form"
                controlId="exampleForm.SelectCustomSizeSm"
              >
                <Form.Label>Total Makrs of written</Form.Label>
                <Form.Control as="select" size="sm">
                  <option></option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group
                className="market-row-second-form"
                controlId="exampleForm.SelectCustomSizeSm"
              >
                <Form.Label>
                  Total Marks of practical <br /> Viva / if amy/
                </Form.Label>
                <Form.Control as="select" size="sm">
                  <option></option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <div className="S-table">
              <Table striped bordered hover>
                <thead>
                  <tr className="tableHead">
                    <th>S.No</th>
                    <th>Student's name</th>
                    <th>Written</th>
                    <th>practical viva</th>
                  </tr>
                </thead>
                <tbody>
                  {MarksTable.map((row) => (
                    <tr key={row.no}>
                      <td>{row.no} </td>
                      <td>{row.name}</td>
                      <td>{row.writtenOutOf100}</td>
                      <td>{row.writtenOutOf50}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <Button className="btnSchoolResult" variant="primary" type="submit">
              Edit
            </Button>
            <Button className="btnSchoolResult" variant="primary" type="submit">
              Close
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EnterMarks;
