import React, { Component } from "react";
import "./App.css";

class App extends Component {
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
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.currentDate}</p>
      </div>
    );
  }
}

export default App;
