import React, { Component } from "react";

const API_URL = "https://restcountries.eu/rest/v2/all";

class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: null,
      names: null
    };
  }

  setNames(data) {
    this.setState({ names: data.map(elem => elem.name) });
  }

  createDivs() {
    if (!this.state.names) {
      return [];
    }
    let divs = [];
    divs = this.state.names.map((element, index) => (
      <tr key={index}>
        <td>{element}</td>
      </tr>
    ));
    return divs;
  }

  componentDidMount() {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        this.setState({ countries: data });
        this.setNames(data);
      });
  }

  render() {
    // return <div>Countries {JSON.stringify(this.state.countries)} </div>;
    return (
      <table>
        <tbody>{this.createDivs()}</tbody>
      </table>
    );
  }
}

export default CountriesList;
