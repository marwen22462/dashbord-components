import React from 'react'
import {Form,  Button, Table} from 'react-bootstrap'
import Header from './Header'

const ClassResult = ({ClassResultTable}) => {
    const title = 'Result >  Class Results'
    return (
        <div  className="home">
            <Header />
            <div className='pageBodyResult'>
    <Form>
        <h6 className='title'>{title}</h6>
    <h4>School results</h4>
  

  <Form.Group controlId="exampleForm.SelectCustomSizeSm">
    <Form.Label>Subject</Form.Label>
    <Form.Control as="select" size="sm" >
      <option></option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <div className="S-table">
  <Table striped bordered hover>
  <thead>
    <tr className="tableHead">
      <th>S.No</th>
      <th>Student's name</th>
      <th>Score Out of 20</th>
    </tr>
  </thead>
  <tbody>
    {ClassResultTable.map((row)=>(
        <tr key={row.no}>
            <td>{row.no} </td>
            <td>{row.name}</td>
            <td>{row.score}</td>
        </tr>
    )) }
  </tbody>
</Table>
</div>
  <Button className='btnSchoolResult button-inder-page' variant="primary" type="submit">
    Edit
  </Button>
  <Button className='btnSchoolResult button-inder-page' variant="primary" type="submit">
    Close
  </Button>
</Form>
        </div>
        </div>
    )
}

export default ClassResult
