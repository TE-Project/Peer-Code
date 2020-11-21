import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap';
import {connect} from 'react-redux';
import NavDropdown from 'react-bootstrap/NavDropdown'
const NavigationNonAuth = () => (
 <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" class="bg-custom navbar2" fixed="top">
    <Navbar.Brand href="/" className="navbar1">PeerCode</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
  
      </Nav>
      <Nav>
      <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/practice">Practice Problems</Nav.Link>
        {/* <Nav.Link href="/">Contests</Nav.Link> */}
        {/*https://react-bootstrap.github.io/components/navbar/#navbars-mobile-friendly*/}
        <NavDropdown class ="dropdown-toggle" data-toggle="dropdown" title="Contests" id="collasible-nav-dropdown">
        <NavDropdown.Item class ="dropdown-item" href="/live">Live Contests</NavDropdown.Item>
        <NavDropdown.Item class ="dropdown-item" href="/past">Past Contests</NavDropdown.Item>
        <NavDropdown.Item  class ="dropdown-item" href="/future">Future Contests</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="/help">Help</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link  href="/signin">
          Sign In/Register
        </Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)




export default NavigationNonAuth