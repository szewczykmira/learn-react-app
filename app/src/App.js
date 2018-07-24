import React, { Component } from "react";
import "./App.css";
import Time from "./Time.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro"><Time /></p>
      </div>
    );
  }
}

export default App;
