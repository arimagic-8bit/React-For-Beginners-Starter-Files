import React, { Component } from "react";

import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

// We put {} in props for everthing that is not string

// state is an object that lives inside a component

class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
