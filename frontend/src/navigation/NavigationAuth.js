import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap';
import { connect } from 'react-redux'
import {signOut} from '../store/authAction.js';
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavigationAuth = (props) => (
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" class="bg-custom" fixed="top" class="navbar">
    
    <Navbar.Brand href="/" className="navbar1">PeerCode</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        
        
      </Nav>
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/practice">Practice Problems</Nav.Link>
        <Nav.Link  href="/ide">IDE</Nav.Link>
        <Nav.Link  href="/contest">Contest</Nav.Link>
        {/* <Nav.Link href="/">Contests</Nav.Link> */}
        {/*https://react-bootstrap.github.io/components/navbar/#navbars-mobile-friendly*/}
        

        <Nav.Link href="/help">Help</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        <NavDropdown class ="dropdown-toggle drpdown" data-toggle="dropdown" title="Profile" id="collasible-nav-dropdown">
        <NavDropdown.Item class ="dropdown-item" href="/profile">Your Profile</NavDropdown.Item>
        <NavDropdown.Item  class ="dropdown-item" href="/"  onClick={props.signOut} >Log Out</NavDropdown.Item>
        </NavDropdown>
       
        
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(NavigationAuth)