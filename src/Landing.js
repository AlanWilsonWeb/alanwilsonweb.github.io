import React from 'react';
import { Fade, Jumbotron, Container, Row, Col } from 'reactstrap';

class Landing extends React.Component {
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
      <Jumbotron className="text-center bg-primary text-white">
        <h1>Hi, I'm Alan</h1>
        <h5>I make Full Stack Web pages</h5>
      </Jumbotron>
      <Jumbotron className="bg-dark text-center">
        <h3>With Emphasis and Proficiency In:</h3>
      {/* <i>I'm seeking to secure an entry-level Programming and Development position that will utilize, challenge, and expand my education, experience, and overall passion for Development, while working to enhance my employers’ operations, and provide reinforcement for those working alongside of me."</i> */}
      <Row>
        <Col sm="2"><i className="fab fab fa-html5 fa-7x blueicon"></i><h6>HTML</h6></Col>
        <Col sm="2"><i className="fab fa-js-square fa-7x blueicon"></i><h6>JavaScript</h6></Col>
        <Col sm="2"><i className="fab fa-css3 fa-7x blueicon"></i><h6>CSS</h6></Col>
        <Col sm="2"><i className="fab fa-react fa-7x blueicon"></i><h6>ReactJS</h6></Col>
        <Col sm="2"><i className="fab fa-node fa-7x blueicon"></i><h6>NodeJS</h6></Col>
        <Col sm="2"><i className="fab fa-git-square fa-7x blueicon"></i><h6>Git/Version Control</h6></Col>
      </Row>
      <Row>
        <Col sm="2"><i className="fas fa-database fa-7x blueicon"></i><h6>SQL/noSQL Databases</h6></Col>
        <Col sm="2"><i className="fab fa-angular fa-7x blueicon"></i><h6>AngularJS</h6></Col>
        <Col sm="2"><i className="fab fa-windows fa-7x blueicon"></i><h6>Desktop Applications</h6></Col>
        <Col sm="2"><i className="fab fa-wordpress fa-7x blueicon"></i><h6>Wordpress</h6></Col>
        <Col sm="2"><i className="fab fa-aws fa-7x blueicon"></i><h6>Deployment Options</h6></Col>
        <Col sm="2"><i className="fas fa-mobile-alt fa-7x blueicon"></i><h6>Mobile/Responsive Design</h6></Col>
      </Row>
      </Jumbotron>
    </Fade>
  </div>
    )
  }
}

export default Landing;
