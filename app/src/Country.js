import React, { Component } from "react";
import "./Country.css";

class Country extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.capital}</td>
        <td>
          <img
            src={this.props.data.flag}
            alt={this.props.data.name}
            className="img-width"
          />
        </td>
      </tr>
    );
  }
}

export default Country;
