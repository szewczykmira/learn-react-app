import React, { Component } from "react";
import Country from "./Country.js";

const API_URL = "https://restcountries.eu/rest/v2/all";

class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: null
    };
  }

  createDivs() {
    if (!this.state.countries) {
      return [];
    }
    let divs = [];
    divs = this.state.countries.map((element, index) => (
      <Country data={element} key={index} />
    ));
    return divs;
  }

  componentDidMount() {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        this.setState({ countries: data });
      });
  }

  render() {
    // return <div>Countries {JSON.stringify(this.state.countries)} </div>;
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>{this.createDivs()}</tbody>
      </table>
    );
  }
}

export default CountriesList;
