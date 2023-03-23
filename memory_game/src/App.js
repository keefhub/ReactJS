import "./App.css";
import React, { Component } from "react";

class App extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      tiles: [
        {
          number: 10,
        },
        {
          number: 9,
        },
        {
          number: 7,
        },
      ],
    };
  }

  displayTiles(index) {
    const tile = this.state.tiles[index];
    return (
      <div className="display-tiles">
        <p className="tiles">{tile.number}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Memory Game</h1>
        <hr />
        {this.displayTiles(0)}
        {this.displayTiles(1)}
        {this.displayTiles(2)}
      </div>
    );
  }
}

export default App;
