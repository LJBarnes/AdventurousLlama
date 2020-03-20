import React, { useState } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import "./style.css";


const Llamabar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <NavbarBrand href="/">AdventurousLlama</NavbarBrand>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5 align-content-end">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="#">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Profile</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Find Your Adventure</NavLink>
                </NavItem>



              </Nav>

            </Collapse>
          </div>
        </div>

      </Navbar>
    </div>
  );
}



export default Llamabar;