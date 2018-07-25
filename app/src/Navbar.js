import React, { Component } from "react";
import Time from "./Time";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand" href="#">
          <Time />
        </span>
      </nav>
    );
  }
}

export default Navbar;
