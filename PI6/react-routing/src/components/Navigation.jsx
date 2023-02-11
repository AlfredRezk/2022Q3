import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import {NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="md" className="text-white">
      <Container>
        <Navbar.Brand href="/">My App</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link"> Home</NavLink>
            <NavLink to="/about" className="nav-link"> About</NavLink>
            <NavLink to="/contact" className="nav-link"> contact</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
