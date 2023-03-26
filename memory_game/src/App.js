import "./App.css";
import React, { Component } from "react";

const max_tiles = 24;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click_count: 0,
      tiles: [],
    };
  }

  resetTiles() {
    let tiles = [];
    let number = 0;

    for (let i = 0; i < max_tiles; i += 2) {
      number++;

      //creating 2 tiles of the same number
      let tileOne = { flipped: true, matched: false, number };
      let tileTwo = { flipped: true, matched: false, number };

      //using spread operator,
      tiles = [...tiles, tileOne, tileTwo];
    }

    for (let i = 0; i <= tiles.length; i++) {
      //randomizing tiles
      const swapTiles = Math.floor(Math.random * tiles.length);
      //swapping tiles
      [tiles[i], tiles[swapTiles]] = [tiles[swapTiles], tiles[i]];
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Greatest Game Ever</h1>
        <strong>Clicks {this.state.click_count}</strong>
        <br />
        <button onClick={this.resetTiles} className="reset-button">
          New Game
        </button>
        <hr />
      </div>
    );
  }
}

export default App;
