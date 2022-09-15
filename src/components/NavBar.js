import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import thebunker from "../assets/thebunker.png";


const NavBar = () => {
  return <Navbar expand="md" fixed="top">
    <Container>
    <Navbar.Brand>
      <img src = {thebunker} alt="site logo" height = "90"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto text-left">
      <Nav.Link>
        <i className="fas fa-golf-ball"></i>Home
        </Nav.Link>
      <Nav.Link>
        <i className ="fas fa-door-open"></i>Sign In
      </Nav.Link>
      <Nav.Link>
        <i className="fas fa-pen"></i>Sign Up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  };

export default NavBar;