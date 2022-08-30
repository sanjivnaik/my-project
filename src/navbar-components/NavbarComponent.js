import React, { Component } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from '../login/Login';
import About from '../main-components/About';
import Contact from '../main-components/Contact';
import Home from '../main-components/Home';
import CreateUser from '../main-components/user/CreateUser';
import ReadUsers from '../main-components/user/ReadUsers';

export default class NavbarComponent extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
          <Container>
              <Navbar.Brand as={Link} to={"/"}>
                <img
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                  <NavDropdown title="Admin" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/users"}>Users</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/roles"}>Roles</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/groups"}>Groups</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/users"}>Help</NavDropdown.Item>
                  </NavDropdown>                  
                  <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>                  
                  <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
              </Nav>
              </Navbar.Collapse>
          </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home/" element={<Home />} /> 
          <Route path="about/" element={<About />} />
          <Route path="contact/" element={<Contact />} />
          <Route path="users/" element={<ReadUsers />} />
          <Route path="users/create/" element={<CreateUser />} />
          <Route path="login/" element={<Login />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
