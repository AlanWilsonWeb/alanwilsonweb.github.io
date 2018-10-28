import React from 'react';
import { Fade, Jumbotron } from 'reactstrap';

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
      </Jumbotron>
      <Jumbotron className="bg-dark text-center">
        <h3>With Emphasis and Proficiency In:</h3>
      <a rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><div className="landingIcons"><i className="fab fab fa-html5 fa-2x"></i> HTML</div></a>
      <br />
      <a rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><div className="landingIcons"><i className="fab fa-js-square fa-2x"></i> JavaScript</div></a>
      <br />
      <a rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><div className="landingIcons"><i className="fab fa-css3 fa-2x"></i> CSS</div></a>
      <br />
      <a rel="noopener noreferrer" href="https://reactjs.org/" target="_blank"><div className="landingIcons"><i className="fab fa-react fa-2x"></i> ReactJS</div></a>
      <br />
      <a rel="noopener noreferrer" href="https://nodejs.org/en/" target="_blank"><div className="landingIcons"><i className="fab fa-node fa-2x"></i> NodeJS</div></a>
      <br />
      <a rel="noopener noreferrer" href="https://git-scm.com/" target="_blank"><div className="landingIcons"><i className="fab fa-git-square fa-2x"></i> Git/Version Control</div></a>
      <br />
      <div className="landingIcons"><i className="fas fa-database fa-2x"></i> SQL/noSQL Databases</div>
      <br />
      <a rel="noopener noreferrer" href="https://angularjs.org/" target="_blank"><div className="landingIcons"><i className="fab fa-angular fa-2x"></i> AngularJS</div></a>
      <br />
      <div className="landingIcons"><i className="fab fa-windows fa-2x"></i> Desktop Applications</div>
      <br />
      <a rel="noopener noreferrer" href="https://wordpress.com/" target="_blank"><div className="landingIcons"><i className="fab fa-wordpress fa-2x"></i> Wordpress</div></a>
      <br />
      <div className="landingIcons"><i className="fab fa-aws fa-2x"></i> Deployment Options</div>
      <br />
      <div className="landingIcons"><i className="fas fa-mobile-alt fa-2x"></i> Mobile & Responsive Design</div>
      <br />
      </Jumbotron>
    </Fade>
  </div>
    )
  }
}

export default Landing;
