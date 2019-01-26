import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavHeader extends Component {
  render() {
    return (
      <header>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            MIN Viewer
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://www.avalanche.ca/mountain-information-network/submit">Submit MIN Report</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://avalanche.ca">Avalanche Canada</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Help</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default NavHeader;
