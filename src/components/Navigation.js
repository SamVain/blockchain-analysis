
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import LogoName from '../imgs/logo.svg'

function Navigation() {
    return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home"> 
            <img 
            src={LogoName} 
            alt="logo" 
            width="30"
            height="30"/>           
            <span className="TitlePadding">Blockchain Visualizer</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/dataview">Data</Nav.Link>
              <Nav.Link as={Link} to="/liveview">Live</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
              <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>        
      </Navbar>
    </div>
  )
}

export default Navigation;