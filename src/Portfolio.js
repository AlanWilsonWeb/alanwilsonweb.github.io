import React from 'react';
import { Button, Fade, Jumbotron, Row, Col } from 'reactstrap';
import moviefive from './images/moviefive.jpg';
import hashrouter from './images/hashrouter.jpg';
import scriptquiz from './images/scriptquiz.jpg';
import bingbong from './images/bingbong.jpg';
import fibonacci from './images/fibonacci.jpg';
import todolist from './images/todolist.jpg';

class Portfolio extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
       repos: [],
       fadein: true
     }
   }

  render() {
    return(
      <div>
        <Fade in={this.state.fadein}>
      <Jumbotron className="text-center bg-primary text-white">
        <h1><i className="fas fa-code"></i> My Portfolio</h1>
        <h5>A collection of Code, Things I've made, and Projects I've been a part of</h5>
      </Jumbotron>
    <Jumbotron className="bg-dark">
      <h1 className="text-center">Notable Projects</h1>
      <Row className="portfolioRow">
        <Col md="4"><img className="portfolioImage img-fluid" src={moviefive} /></Col>
        <Col md="8">
          <h2><u>MovieFive</u></h2>
          A Full-Stack project site where a User can create a list of their Top-5 favorite movies, and share it in a variety of methods (email, link, social media, etc). The site was built in React, utilizing a NodeJS and ExpressJS back-end server, MongoDB/mLab Database, Heroku Live Deployment, and Bootstrap 3 with CSS for styling. This group project earned me the final certification as a Developer through the Full-Stack Web curriculum at Woz-U.
          <br />
          <Button className="buttonz" href="https://moviefive.herokuapp.com" target="_blank" color="primary"><i class="far fa-eye"></i> Live Site</Button> <Button className="buttonz" href="https://github.com/5-28-a/group-project" target="_blank" color="primary"><i className="fas fa-code"></i> View Code</Button>
        </Col>
      </Row>
      <br />
      <Row className="portfolioRow">
        <Col md="4"><img className="portfolioImage img-fluid" src={hashrouter} /></Col>
        <Col md="8">
          <h2><u>React-HashRouter</u></h2>
          A lightweight routing alternative for the ReactJS framework. This routing solution controls navigation through the use of #hashes and component state. This solution is very useful in an environment where /slash/ routing is proxied and the React Application needs to be "single page." This also allows add-on libraries, like a Redux Store, to not lose their state during a page transition which re-loads the entire application.
          <br />
          <Button className="buttonz" href="https://nannerfox.herokuapp.com" target="_blank" color="primary"><i class="far fa-eye"></i> Live Site</Button> <Button className="buttonz" href="https://github.com/NannerFox/React-HashRouter" target="_blank" color="primary"><i className="fas fa-code"></i> View Code</Button> <Button className="buttonz" href="https://nannerfox.wordpress.com/2018/07/16/the-scenic-route/" target="_blank" color="primary"><i className="fab fa-wordpress-simple"></i> View Blog Post</Button>
        </Col>
      </Row>
      <br />
      <Row className="portfolioRow">
        <Col md="4"><img className="portfolioImage img-fluid" src={scriptquiz} /></Col>
        <Col md="8">
          <h2><u>JavaScript Quiz</u></h2>
          A fun, small project, which quizzes the user on some various knowledge related to core JavaScript (no extenal libraries or frameworks).
          <br />
          <Button className="buttonz" href="https://awjavascriptquiz.herokuapp.com/" target="_blank" color="primary"><i class="far fa-eye"></i> Live Site</Button> <Button className="buttonz" href="https://github.com/NannerFox/JavaScript-Quiz" target="_blank" color="primary"><i className="fas fa-code"></i> View Code</Button>
        </Col>
      </Row>
      <br />
      <Row className="portfolioRow">
        <Col md="4"><img className="portfolioImage img-fluid" src={bingbong} /></Col>
        <Col md="8">
          <h2><u>FizzBuzz / BingBong</u></h2>
          FizzBuzz? BingBong? It goes by many names in the Developer world, but every iteration holds the same requirement: display a list of numbers which will also output one of these keywords upon the event that a certain operator is met. This is a common JavaScript interview question, and something I liked so much that I decided to do it TWICE!
          <br />
          <Button className="buttonz" href="https://github.com/NannerFox/BingBong" target="_blank" color="primary"><i className="fas fa-code"></i> View Code (1)</Button> <Button className="buttonz" href="https://github.com/NannerFox/FizzBuzz" target="_blank" color="primary"><i className="fas fa-code"></i> View Code (2)</Button> <Button className="buttonz" href="https://nannerfox.wordpress.com/2018/09/17/fizz-buzz-killington/" target="_blank" color="primary"><i className="fab fa-wordpress-simple"></i> View Blog Post</Button>
        </Col>
      </Row>
      <br />
      <Row className="portfolioRow">
        <Col md="4"><img className="portfolioImage img-fluid" src={todolist} /></Col>
        <Col md="8">
          <h2><u>Ionic-ToDo</u></h2>
          To-Do list for Android Mobile built in Ionic-Cordova, and based on the AngularJS framework.
          <br />
          <Button className="buttonz" href="https://github.com/NannerFox/Ionic-ToDo" target="_blank" color="primary"><i className="fas fa-code"></i> View Code</Button>
        </Col>
      </Row>
      <br />
      <Row className="portfolioRow">
        <Col md="4"><img className="portfolioImage img-fluid" src={fibonacci} /></Col>
        <Col md="8">
          <h2><u>Fibonacci-Counter</u></h2>
          Tiny JavaScript project utilizing math skills to output a Fibonacci-esque sequence of numbers. The requirements were to remove the first 2 numbers of the sequence (0, 1), and start the list from there.
          <br />
          <Button className="buttonz" href="https://github.com/NannerFox/Fibonacci-Counter" target="_blank" color="primary"><i className="fas fa-code"></i> View Code</Button>
        </Col>
      </Row>
      <br />
      <Row className="portfolioRow">
        <Col md="4"><img className="portfolioImage img-fluid" src="https://avatars3.githubusercontent.com/u/33139141?s=460&v=4" /></Col>
        <Col md="8">
          <h2><u>Github Profile</u></h2>
          View the rest of my projects and activities on Github!
          <br />
          <Button className="buttonz" href="https://github.com/NannerFox" target="_blank" color="primary"><i className="fab fa-github"></i> Visit Site</Button>
        </Col>
      </Row>
    </Jumbotron>
  </Fade>
  </div>
);
}
}

export default Portfolio;
