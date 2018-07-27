import React from 'react';
import { Jumbotron } from 'reactstrap';
import axios from 'axios';

class Github extends React.Component {
  constructor() {
     super()
     this.state = {
       repos: []
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
      <Jumbotron className="text-center bg-primary text-white">
        <h1>Github Links</h1>
        <h5>lorem epsom salt</h5>
      </Jumbotron>
    )
  }
}

export default Github;
