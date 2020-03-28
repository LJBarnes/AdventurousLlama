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
      
      <Navbar className='row' color="light" light expand="md">
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <NavbarBrand href="/">AdventurousLlama</NavbarBrand>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4 align-content-end">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/About">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="Profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="Adventures">Find Your Adventure</NavLink>
                </NavItem>



              </Nav>

            </Collapse>
          </div>
        

      </Navbar>
    </div>
  );
}



export default Llamabar;