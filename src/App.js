import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Navigation from './Navigation';
import Route from './Route';

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm="2">
            <Navigation />
          </Col>
          <Col sm="9">
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
