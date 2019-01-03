import React from 'react';
import { Fade, Button, Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import resume from './resume.pdf';

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fadein: true
    }
  }

  render() {
    return(
      <Fade in={this.state.fadein}>
      <Nav vertical>
        <NavItem>
          <NavLink href="#home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#portfolio">Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about">About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#links">Links / Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={resume} target="_blank">My Resume</NavLink>
        </NavItem>
      </Nav>
    </Fade>
    )
  }
}

export default Navigation;
