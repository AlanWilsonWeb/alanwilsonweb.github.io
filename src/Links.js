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
      <Jumbotron className="text-center bg-primary text-white">
        <h1><i className="far fa-hand-point-up"></i> Links</h1>
        <h5>and Other Contact Information</h5>
      </Jumbotron>
      <Row>
        <Col sm="12" className="faderow">
        <h3>Links</h3>
      </Col>
      </Row>
    </Fade>
    </div>
    )
  }
}

export default Links;
