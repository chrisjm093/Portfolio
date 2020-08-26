import React from "react";
import Nav from 'react-bootstrap/Nav';
import "./style.css";
import { Navbar, NavDropdown, Container } from "react-bootstrap";

function PortfolioNavbar(){

  return(
    <Navbar expand="lg" navbar="light">
    <Container fluid="lg">
    <Navbar.Brand href="/">Christopher Marti</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="Links" id="basic-nav-dropdown">
          <NavDropdown.Item  href="https://drive.google.com/file/d/1jJ83ZhwWns-9nhpRyJV84rRxRLpbGRE1/view?ths=true">Resume</NavDropdown.Item>
          <NavDropdown.Item  href="https://github.com/chrisjm093">GitHub</NavDropdown.Item>
          <NavDropdown.Item  href="https://www.linkedin.com/in/christopher-m-25246649">LinkedIn</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/">About</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>  
    </Navbar.Collapse>
    </Container>
</Navbar>

  )
};

export default PortfolioNavbar;