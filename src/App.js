import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Navigation from './Navigation';
import Route from './Route';

class App extends Component {
  render() {
    return (
      <div className="mycomponent">
        <Row>
          <Col md="2">
            <Navigation />
          </Col>
          <Col md="9">
            <Container>
              <Route />
            </Container>
          </Col>
          <Col sm="1">
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
