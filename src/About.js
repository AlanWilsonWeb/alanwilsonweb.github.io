import React from 'react';
import { Fade, Row, Col, Jumbotron } from 'reactstrap';
import profile from './images/profile.jpg';

class About extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
       fadein: true
     }
   }
  render() {
    return(
    <div>
      <Fade in={this.state.fadein}>
      <Jumbotron className="text-center myBlueBack text-white">
        <h1><i className="far fa-user"></i> About Me</h1>
        <h5>Some Information</h5>
      </Jumbotron>
      <Jumbotron className="bg-dark text-center">
        <h1>About Me:</h1>
        <img id="profilePic" className="img-fluid" src={profile} alt=""/>
      </Jumbotron>
    </Fade>
    </div>
    )
  }
}

export default About;
