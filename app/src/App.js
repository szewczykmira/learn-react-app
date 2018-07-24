import React, { Component } from "react";
import "./App.css";
import CountriesList from "./Countries.js";
import Time from "./Time.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Time />
        <CountriesList />
      </div>
    );
  }
}

export default App;
