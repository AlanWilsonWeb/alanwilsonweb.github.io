import React from 'react';
import { Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap';

class Navigation extends React.Component {
  render() {
    return(
      <Nav vertical>
        <NavbarBrand><h3><i class="fab fa-react"></i> Alan Wilson</h3></NavbarBrand>
        <NavItem>
          <NavLink href="#home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#github">Github</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">A Link</NavLink>
        </NavItem>
      </Nav>
    )
  }
}

export default Navigation;
