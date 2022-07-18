import React from 'react'
import { Link } from "gatsby"
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

function navbar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand ><Link to="/">Home-Logo</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About Us</Link></Nav.Link>
            <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default navbar
