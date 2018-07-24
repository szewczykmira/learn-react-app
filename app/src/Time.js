import React, { Component } from "react";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = { currentDate: null };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentDate: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    return <div>{this.state.currentDate}</div>;
  }
}

export default Time;
