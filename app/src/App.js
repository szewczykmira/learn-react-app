import React, { Component } from "react";
import "./App.css";
import CountriesList from "./Countries.js";
import CountryInfo from "./CountryInfo";
import Navbar from "./Navbar.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <CountryInfo name="PL" />
          <CountriesList />
        </div>
      </div>
    );
  }
}

export default App;
