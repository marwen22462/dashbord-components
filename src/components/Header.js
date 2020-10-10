import React from 'react'
import profilePhoto from '../assets/profile-picture.jpg'
import {faCog,faEnvelope,faInfoCircle, faComment, faUserCircle, faFingerprint,} from '@fortawesome/free-solid-svg-icons'
import { Col, Navbar, Image} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Header = ({type}) => {
    return type==="home"? (
        <div>
            <Navbar bg="light" >
    <div className='profile'>
<Col xs={6} md={4}>
      <Image className='profile-picture' src={profilePhoto} roundedCircle />
    </Col>
      <h6>Mr.AK.</h6>
      </div>
    <Navbar.Brand className="nav-title">SHRI JI BABA PUBLIC SCHOOL</Navbar.Brand>
<div className="userNav">
    <span className="logOutSection">
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
        </div>
    ):(
      <div>
        <Navbar bg="light"className="second-nav" >
    <Navbar.Brand className="nav-title" >SHRI JI BABA PUBLIC SCHOOL</Navbar.Brand>
    </Navbar>
      </div>
    )
}

export default Header
