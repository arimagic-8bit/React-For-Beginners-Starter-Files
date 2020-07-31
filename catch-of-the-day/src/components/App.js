import React, { Component } from "react";
import base from "../base";

import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";

// We put {} in props for everthing that is not string

// state is an object that lives inside a component

// Let's use firebase to save the data when page refreshes!
// WARNING --> use it in REAL TIME DB not CLOUD FIRESTONE

class App extends Component {
  state = {
    fishes: {},
    order: {},
  };

  // ref = piece of data in DB
  // when it mounts syncs the data from DB to the app
  componentDidMount() {
    const { storeId } = this.props.match.params;
    this.ref = base.syncState(`${storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }

  // si no paramos de escuchar a cualquier cambio, puede haber un memory leak en el
  // futuro, así que tenemos que desvincular la DB cuando
  // el componente se desmonta

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    // 1. Take a copy of the existing state. We don't want to
    // modify it directly

    const fishes = { ...this.state.fishes };

    // 2. Add new fish to that fishes
    // Date now gives us miliscnds to give to every fish a
    // unique key when created

    fishes[`fish${Date.now()}`] = fish;

    // 3. Set the new object to state. If property and value
    // have = name, we can leave only one (fishes = fishes)

    this.setState({ fishes });
  };

  loadSamplesFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    const order = { ...this.state.order };

    // if there is one key fish on order already, increment it by one
    // if not star by one
    order[key] = order[key] + 1 || 1;

    this.setState({ order });
  };

  // when we loop, we have to give to each element a unique key
  // in order to make React faster

  // we can't pass the key as key as a props, we have to pass it again
  // in another name

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                addToOrder={this.addToOrder}
                key={key}
                index={key}
                details={this.state.fishes[key]}
              />
            ))}
          </ul>
        </div>
        {/* We spread all the state as props {...this.state}. The problem is that maybe we don't want 
        to pass all the data. We don't have to pass all the data if we don't need it */}
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSamplesFishes={this.loadSamplesFishes}
        />
      </div>
    );
  }
}

export default App;
