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
      <Jumbotron className="text-center bg-primary text-white">
        <h1>Hi, I'm Alan</h1>
        <h5>I make Full Stack Web pages</h5>
        <i>I'm seeking to secure an entry-level Programming and Development position that will utilize, challenge, and expand my education, experience, and overall passion for Development, while working to enhance my employers’ operations, and provide reinforcement for those working alongside of me."</i>
      </Jumbotron>
    </Fade>
  </div>
    )
  }
}

export default Landing;
