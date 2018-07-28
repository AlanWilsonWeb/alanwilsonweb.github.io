import React from 'react';
import { Fade, Row, Col, Jumbotron } from 'reactstrap';

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
      <Jumbotron className="text-center bg-primary text-white">
        <h1><i className="far fa-user"></i> About Me</h1>
        <h5>Some Information</h5>
      </Jumbotron>
      <Row>
        <Col sm="12" className="faderow">
        <h3>About</h3>
      </Col>
      </Row>
    </Fade>
    </div>
    )
  }
}

export default About;
