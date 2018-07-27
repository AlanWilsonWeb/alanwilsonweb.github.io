import React from 'react';
import { Jumbotron } from 'reactstrap';

class Landing extends React.Component {
  render() {
    return(
      <Jumbotron className="text-center bg-primary text-white">
        <h1>Hi, I'm Alan</h1>
        <h5>I make Full Stack Web pages</h5>
        <i>I'm seeking to secure an entry-level Programming and Development position that will utilize, challenge, and expand my education, experience, and overall passion for Development, while working to enhance my employers’ operations, and provide reinforcement for those working alongside of me."</i>
      </Jumbotron>
    )
  }
}

export default Landing;
