import React, { Component } from "react";

class Country extends Component {
  render() {
    return <tr><td>{this.props.name}</td></tr>;
  }
}

export default Country;
