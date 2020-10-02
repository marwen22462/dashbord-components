import React from 'react'
import {Form,  Button} from 'react-bootstrap'
import Navigation from './Navigation'

const SchoolResult = () => {
    return (
        <div className="home">
            <Navigation />
    <div className='pageBodyResult'>
    <Form>
    <Form.Group id="formGridCheckbox" className="first-check">
    <Form.Check type="checkbox" label="School test" />
    <Form.Check type="checkbox" label="class test" />
  </Form.Group>
  

  <Form.Group controlId="exampleForm.SelectCustomSizeSm">
    <Form.Label>Exam name</Form.Label>
    <Form.Control as="select" size="sm" >
      <option></option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
      <Form.Row>
      <Form.Group className="row-first-form" controlId="exampleForm.SelectCustomSizeSm">
    <Form.Label>Class</Form.Label>
    <Form.Control as="select" size="sm" >
      <option></option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group className="row-second-form" controlId="exampleForm.SelectCustomSizeSm">
    <Form.Label>Section</Form.Label>
    <Form.Control as="select" size="sm" >
      <option></option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
    </Form.Row>
    <Form.Group className='last-form' controlId="exampleForm.SelectCustomSizeSm">
    <Form.Label>Students name</Form.Label>
    <Form.Control as="select" size="sm" >
      <option></option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>

  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
        </div>
        </div>
    )
}

export default SchoolResult
