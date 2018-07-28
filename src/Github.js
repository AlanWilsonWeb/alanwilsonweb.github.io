import React from 'react';
import { Fade, Jumbotron, Row, Col } from 'reactstrap';
import axios from 'axios';

class Github extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
       repos: [],
       fadein: true
     }
   }
   componentDidMount() {
     axios.get('https://api.github.com/users/NannerFox/repos')
  .then((response) => {
    console.log(response.data);
    this.setState({ repos: response.data });
  })
  .catch((error)=>{
    console.log(error);
  });
}
  render() {
    return(
      <div>
        <Fade in={this.state.fadein}>
      <Jumbotron className="text-center bg-primary text-white">
        <h1>Github Links</h1>
        <h5>lorem epsom salt</h5>
      </Jumbotron>
      {this.state.repos.map((repo, index) => <div key={index}>
          <div id={repo.id}>
            <Row>
              <Col sm="12" className="faderow"><h3><i className="fas fa-code-branch"></i> {repo.name}</h3>
                <h5>{repo.description}</h5>
              </Col>
            </Row>
          </div>
      </div>
    )}
  </Fade>
  </div>
);
}
}

export default Github;
