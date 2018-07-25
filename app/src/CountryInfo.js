import React, { Component } from "react";

const API_URL = "https://restcountries.eu/rest/v2/alpha/";

class CountryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { country: props.name, countryData: null };
  }

  componentDidMount() {
    if (!this.state.country) {
      return null;
    }
    fetch(API_URL + this.state.country)
      .then(response => response.json())
      .then(data => {this.setState({countryData: data}); console.log(data);});
  }

  displayCountryInfo(){
    if (this.state.countryData){
      return this.state.countryData.name;
    }
    return this.state.country;
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">{this.displayCountryInfo()}</div>
      </div>
    );
  }
}

export default CountryInfo;
