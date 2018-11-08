import React from 'react';
import { Fade, Jumbotron, Row, Col } from 'reactstrap';

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
      <Jumbotron className="text-center myBlueBack text-white mainjumbo">
        <h1>Alan Wilson</h1>
        <h5>Developer</h5>
        <div id="contacts"><div id="email"><a href="mailto:alanwilson020@gmail.com">alanwilson020@gmail.com</a> | 309.241.7990</div></div>
      </Jumbotron>
      <Jumbotron className="bg-dark text-center">
        <h3>With Emphasis and Proficiency In:</h3>
      <a rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><Row className="landingIcons"><Col sm="2"><i className="fab fab fa-html5 fa-2x"></i></Col><Col className="rightSide" sm="10">HTML</Col></Row></a>
      <br />
      <a rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><Row className="landingIcons"><Col sm="2"><i className="fab fa-js-square fa-2x"></i></Col><Col className="rightSide" sm="10">JavaScript</Col></Row></a>
      <br />
      <a rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><Row className="landingIcons"><Col sm="2"><i className="fab fa-css3 fa-2x"></i></Col><Col className="rightSide" sm="10">CSS</Col></Row></a>
      <br />
      <a rel="noopener noreferrer" href="https://reactjs.org/" target="_blank"><Row className="landingIcons"><Col sm="2"><i className="fab fa-react fa-2x"></i></Col><Col className="rightSide" sm="10">ReactJS</Col></Row></a>
      <br />
      <a rel="noopener noreferrer" href="https://nodejs.org/en/" target="_blank"><Row className="landingIcons"><Col sm="2"><i className="fab fa-node fa-2x"></i></Col><Col className="rightSide" sm="10">NodeJS</Col></Row></a>
      <br />
      <a rel="noopener noreferrer" href="https://git-scm.com/" target="_blank"><Row className="landingIcons"><Col sm="2"><i className="fab fa-git-square fa-2x"></i></Col><Col className="rightSide" sm="10">Git/Version Control</Col></Row></a>
      <br />
      <Row className="landingIcons"><Col sm="2"><i className="fas fa-database fa-2x"></i></Col><Col className="rightSide" sm="10">SQL/noSQL Databases</Col></Row>
      <br />
      <a rel="noopener noreferrer" href="https://angularjs.org/" target="_blank"><Row className="landingIcons"><Col sm="2"><i className="fab fa-angular fa-2x"></i></Col><Col className="rightSide" sm="10">AngularJS</Col></Row></a>
      <br />
      <Row className="landingIcons"><Col sm="2"><i className="fab fa-windows fa-2x"></i></Col><Col className="rightSide" sm="10">Desktop Applications</Col></Row>
      <br />
      <a rel="noopener noreferrer" href="https://wordpress.com/" target="_blank"><Row className="landingIcons"><Col sm="2"><i className="fab fa-wordpress fa-2x"></i></Col><Col className="rightSide" sm="10">Wordpress</Col></Row></a>
      <br />
      <Row className="landingIcons"><Col sm="2"><i className="fab fa-aws fa-2x"></i></Col><Col className="rightSide" sm="10">Deployment Options</Col></Row>
      <br />
      <Row className="landingIcons"><Col sm="2"><i className="fas fa-mobile-alt fa-2x"></i></Col><Col className="rightSide" sm="10">Mobile & Responsive Design</Col></Row>
      <br />
      </Jumbotron>
    </Fade>
  </div>
    )
  }
}

export default Landing;
