import React from 'react';
import { Fade, Jumbotron, Row, Col } from 'reactstrap';
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
      <Jumbotron className="text-center myBlueBack text-white mainjumbo">
        <h1><i className="far fa-user"></i> About Me</h1>
        <h5>Some Information</h5>
      </Jumbotron>
      <Jumbotron className="bg-dark text-center">
        <h1>I'm Alan Wilson</h1>
        <Row>
          <Col sm="4"><img id="profilePic" className="img-fluid" src={profile} alt=""/></Col>
          <Col id="profileRight" sm="8">I'm an aspiring developer from Central Illinois. I'm a father and husband first and foremost, but programmer and coder at heart. I've spent my entire life in the pursuit of coding and the understanding of the inner-workings of computers. My passion for technology at a very young age led to my first exposure in development in the late 90's, learning very basic HTML and primitive forms of C and BASIC to "hack" then-current video games. In high school, I was creating programs on graphing calculators for my friends and classmates. My focus has always been the manipulation of data and understanding the flow of information between one point to another, as opposed to concentration on design and aesthetics. My ideal projects involve me buried in the back-end of the code doing server configuration and setting up of routes while other members of my team handle the visual aspects of things. In the future, I want to involve myself deep into Artificial Intelligence and machine learning, in a way that results in me creating something truly revolutionary in this day and age of technology. It always has been a passion of mine to bridge the gap between the human mind and the technological world, and I hope one day that the work that I do can bring us closer to that goal.</Col>
        </Row>
        <br />

      </Jumbotron>
    </Fade>
    </div>
    )
  }
}

export default About;
