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
    <>

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


          <NavDropdown
            title="Services"
            id="collasible-nav-dropdown"
            onToggle={handleDropdownToggle}
            show={isDropdownOpen}
          >
            <NavDropdown.Item as={Link} to="/WJ">
              Landscaping
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/PropertyMaintenance">
              Maintenance
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/WJ">
              Snow Removal
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/PropertyManagement">
              Property Management
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={Link} to="/wj">
            W&J Landscaping
          </Nav.Link>

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

    <div className="construction-bar">
        Apologies, website under construction, some features unavailable
      </div>
    </>

    
  );
}
