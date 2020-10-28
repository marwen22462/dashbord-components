import React from 'react'
import {Form,  Button,  Col, Image} from 'react-bootstrap'
import Header from './Header'
import image from '../assets/education-photo.jpg'

const ERessources = () => {
    return (
        <div>
            <div className="home">
            <Header />
    <div className='pageBodyResult'>
    
    <h4>E-Ressources</h4>
  
  
      <Form.Group className="row-first-form" controlId="exampleForm.SelectCustomSizeSm">
    <Form.Label className="ressource-form-label">Chapter/Topic name</Form.Label>
    <Form.Control className="ressource-form-controle" as="select" size="sm" >
      <option></option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>

    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control className="ressource-textarea" as="textarea" rows={3} cols={3} />
  </Form.Group>
    
<div className="ressource-btns">
  <Button className="ressource-btn"  type="submit">
    +  ADD file
  </Button>
  <Button className="ressource-btn"  type="submit">
    +  Delete file
  </Button></div>
  <div className="ressources-three-btn">
  <Button variant="light">video</Button>
  <Button variant="light">PDF / notes</Button>
  <Button variant="light">Web lines</Button>
  </div>

<div className="ressource-container">
    <Col xs={1} md={2}>
      <Image src={image} thumbnail />
      <p>video1</p>
    </Col>
    <Col xs={2} md={2}>
      <Image src={image} thumbnail />
      <p>video2</p>
    </Col>
    <Col xs={2} md={2}>
      <Image src={image} thumbnail />
      <p>video3</p>
    </Col>
    <Col xs={2} md={2}>
      <Image src={image} thumbnail />
      <p>video4</p>
    </Col>
    <Col xs={2} md={2}>
      <Image src={image} thumbnail />
      <p>video5</p>
    </Col>
    </div>

<div className="search-section">
<Button className="ressource-btn" variant="primary" type="submit">
    Save
  </Button>
  </div>
        </div>
        </div>
        </div>
    )
}

export default ERessources
