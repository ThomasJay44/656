import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = (isOpen) => {
    setDropdownOpen(isOpen);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navigation"
    >
      <Navbar.Brand as={Link} to="/">
        656 Services
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/wj">
            W&J Landscaping
          </Nav.Link>

          <NavDropdown
            title="Services"
            id="collasible-nav-dropdown"
            onToggle={handleDropdownToggle}
            show={isDropdownOpen}
          >
            <NavDropdown.Item as={Link} to="/Landscaping">
              Landscaping
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Maintenance">
              Maintenance
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Snow Removal">
              Snow Removal
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/Property Management">
              Property Management
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={Link} to="/Partners">
            Partners
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/gallery">
            Gallery
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
