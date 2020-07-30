import React, { Component } from "react";

import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

// We put {} in props for everthing that is not string

class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Inventory />
        <Order />
      </div>
    );
  }
}

export default App;
