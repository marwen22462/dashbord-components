import React from 'react'
import {Container, Col, Image, Navbar, Card} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPowerOff} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

import profilePhoto from '../assets/profile-picture.jpg'
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.png'
const Home = () => {
    return (
        <div className="home">
            <Navbar bg="light" >
    <Navbar.Brand className="second-nav">SHRI JI BABA PUBLIC SCHOOL</Navbar.Brand>
    
  </Navbar>
<div className='pageBody'>
<div className="userNav">
    <div className='profile'>
<Col xs={6} md={4}>
      <Image className='profile-picture' src={profilePhoto} roundedCircle />
    </Col>
      <h6>Mr.AK.</h6>
      </div>
    <span className="logOutSection"><h4>Log out</h4>
    <span className="svgLogOut">
    <FontAwesomeIcon icon={faPowerOff} className="mr-3" />
    </span>
    </span>
</div>
<Container>
<Card style={{ width: '18rem' }}>
  <Image variant="top" src={photo1} className="rounded-circle" />
  <Card.Body>
    <Card.Title>E-resources</Card.Title>
  </Card.Body>
</Card>
            <Link to="/schoolResult">
<Card style={{ width: '18rem' }}>
  <Image variant="top" src={photo2} className="rounded-circle"/>
  <Card.Body>
    <Card.Title>Students results</Card.Title>
  </Card.Body>
</Card>
</Link>
            <Link to="/approvalResult">
<Card style={{ width: '18rem' }}>
  <Image variant="top" src={photo3} className="rounded-circle" />
  <Card.Body>
    <Card.Title>Approve results</Card.Title>
  </Card.Body>
</Card>
</Link>
</Container>
</div>
        </div>
    )
}

export default Home
