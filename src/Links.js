import React from 'react';
import { Fade, Row, Col, Jumbotron } from 'reactstrap';

class Links extends React.Component {
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
        <h1><i className="far fa-hand-point-up"></i> Links</h1>
        <h5>and Other Contact Information</h5>
      </Jumbotron>
      <Jumbotron className="bg-dark text-center">
        <a href="mailto:alanwilson020@gmail.com"><Row className="linkLink"><Col sm="2"><i className="far fa-envelope fa-3x"></i></Col><Col className="rightSide" sm="10"><h3>Email: alanwilson020@gmail.com</h3></Col></Row></a>
        <br />
        <a href="https://www.linkedin.com/in/alanwilson020/" rel="noopener noreferrer" target="_blank"><Row className="linkLink"><Col sm="2"><i className="fab fa-linkedin fa-3x"></i></Col><Col className="rightSide" sm="10"><h3>LinkedIn Profile</h3></Col></Row></a>
        <br />
        <a href="https://nannerfox.wordpress.com/" rel="noopener noreferrer" target="_blank"><Row className="linkLink"><Col sm="2"><i className="fab fa-wordpress-simple fa-3x"></i></Col><Col className="rightSide" sm="10"><h3>My Blog: The Digital Frontier</h3></Col></Row></a>
        <br />
        <a href="https://github.com/NannerFox" rel="noopener noreferrer" target="_blank"><Row className="linkLink"><Col sm="2"><i className="fab fa-github fa-3x"></i></Col><Col className="rightSide" sm="10"><h3>Github Profile</h3></Col></Row></a>
        <br />
      </Jumbotron>
    </Fade>
    </div>
    )
  }
}

export default Links;
