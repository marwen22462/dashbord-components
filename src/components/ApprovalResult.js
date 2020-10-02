import React from 'react'
import {Form,  Button, Table} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash, faEye} from '@fortawesome/free-solid-svg-icons'
import Navigation from './Navigation'

const ApprovalResult = ({tableData}) => {
    return (
      
        <div className="home">
            <Navigation />
    <div className='pageBodyResult'>
    
    <h4>Approve result</h4>
  
  <Form.Row>
      <Form.Group className="row-first-form" controlId="exampleForm.SelectCustomSizeSm">
    <Form.Label>Exam Name</Form.Label>
    <Form.Control as="select" size="sm" >
      <option></option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group className="row-second-form" controlId="exampleForm.SelectCustomSizeSm">
    <Form.Label>Subject Name</Form.Label>
    <Form.Control as="select" size="sm" >
      <option></option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
    </Form.Row>
    

  <Button className="search-btn" variant="primary" type="submit">
    Search
  </Button>
<div className="S-table">
  <Table striped bordered hover>
  <thead>
    <tr className="tableHead">
      <th>S.No</th>
      <th>Student's name</th>
      <th>Delete</th>
      <th>View</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {tableData.map((row)=>(
        <tr key={row.no}>
            <td>{row.no} </td>
            <td>{row.name}</td>
            <td><FontAwesomeIcon icon={faTrash} /></td>
            <td><FontAwesomeIcon icon={faEye} /></td>
            <td className="approval-case">{row.approval}</td>
        </tr>
    )) }
  </tbody>
</Table>
</div>
<Button className="search-btn" variant="primary" type="submit">
    Submit
  </Button>
        </div>
        </div>


      
    )
}

export default ApprovalResult
