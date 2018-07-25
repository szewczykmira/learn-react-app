import React, { Component } from "react";
import "./App.css";
import CountriesList from "./Countries.js";
import Navbar from "./Navbar.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <CountriesList />
      </div>
    );
  }
}

export default App;
