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
          <Col md="2"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><i className="fab fab fa-html5 fa-5x blueicon"></i><h6>HTML</h6></a></Col>
          <Col md="2"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><i className="fab fa-js-square fa-5x blueicon"></i><h6>JavaScript</h6></a></Col>
          <Col md="2"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><i className="fab fa-css3 fa-5x blueicon"></i><h6>CSS</h6></a></Col>
          <Col md="2"><a href="https://reactjs.org/" target="_blank"><i className="fab fa-react fa-5x blueicon"></i><h6>ReactJS</h6></a></Col>
          <Col md="2"><a href="https://nodejs.org/en/" target="_blank"><i className="fab fa-node fa-5x blueicon"></i><h6>NodeJS</h6></a></Col>
          <Col md="2"><a href="https://git-scm.com/" target="_blank"><i className="fab fa-git-square fa-5x blueicon"></i><h6>Git/Version Control</h6></a></Col>
      </Row>
      <Row>
          <Col md="2"><i className="fas fa-database fa-5x blueicon"></i><h6>SQL/noSQL Databases</h6></Col>
          <Col md="2"><a href="https://angularjs.org/" target="_blank"><i className="fab fa-angular fa-5x blueicon"></i><h6>AngularJS</h6></a></Col>
          <Col md="2"><i className="fab fa-windows fa-5x blueicon"></i><h6>Desktop Applications</h6></Col>
          <Col md="2"><a href="https://wordpress.com/" target="_blank"><i className="fab fa-wordpress fa-5x blueicon"></i><h6>Wordpress</h6></a></Col>
          <Col md="2"><i className="fab fa-aws fa-5x blueicon"></i><h6>Deployment Options</h6></Col>
          <Col md="2"><i className="fas fa-mobile-alt fa-5x blueicon"></i><h6>Mobile & Responsive Design</h6></Col>
      </Row>
      </Jumbotron>
    </Fade>
  </div>
    )
  }
}

export default Landing;
