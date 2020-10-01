import React from 'react'
import {Container, Col, Image, Navbar, Card} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCog,faEnvelope,faInfoCircle, faComment, faUserCircle, faFingerprint,} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

import profilePhoto from '../assets/profile-picture.jpg'
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.png'
const Home = () => {
    return (
        <div className="home">
            <Navbar bg="light" >
    <div className='profile'>
<Col xs={6} md={4}>
      <Image className='profile-picture' src={profilePhoto} roundedCircle />
    </Col>
      <h6>Mr.AK.</h6>
      </div>
    <Navbar.Brand className="second-nav">SHRI JI BABA PUBLIC SCHOOL</Navbar.Brand>
<div className="userNav">
    <span className="logOutSection"><h4>Log out</h4>
    <span className="svgLogOut dropdown">
      <span className="dropIcon">
    <FontAwesomeIcon icon={faCog} className="mr-3" />
    </span>
    <div className="dropdown-content">
    <a className="dropDownTitle">Setting</a>
    <a href="#"><FontAwesomeIcon icon={faEnvelope} className="mr-3" /> Contact us</a>
    <a href="#"><FontAwesomeIcon icon={faComment} className="mr-3" />Feedback</a>
    <a href="#"><FontAwesomeIcon icon={faUserCircle} className="mr-3" />Log out</a>
    <a href="#"><FontAwesomeIcon icon={faFingerprint} className="mr-3" />Change password</a>
    <a href="#"><FontAwesomeIcon icon={faInfoCircle} className="mr-3" />Help</a>
  </div>
    </span>
    </span>
</div>
    
  </Navbar>
<div className='pageBody'>
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
