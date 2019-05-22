import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const BaseNavbar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Products</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
);

export default BaseNavbar;