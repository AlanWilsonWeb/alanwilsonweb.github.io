import React from "react";
import Landing from './Landing';
import Portfolio from './Portfolio';
import About from './About';
import Links from './Links';

class Route extends React.Component {

constructor(props){
  super(props);
  this.state = {
    page: this.renderSwitch(window.location.hash)
  };
  this.renderSwitch = this.renderSwitch.bind(this);
  this.routeSwitch = this.routeSwitch.bind(this);
}

componentDidMount() {
    window.addEventListener("hashchange", this.routeSwitch);
    this.setState({user: this.props.user})
}

routeSwitch() {
  this.setState({
    page: this.renderSwitch(window.location.hash)
    });
}

  renderSwitch(pathname) {
    switch(pathname) {
      case "#home":
        return <Landing />;
      case "#about":
        return <About />;
      case "#portfolio":
        return <Portfolio />;
      case "#links":
        return <Links />;
      default:
        return <Landing />;
    }
  }

  render() {
    return(
      <div>
      {this.state.page}
      </div>
    )
  }
}

export default Route;
