import React, { Component } from "react";
import "./App.css";
import UserCountDisplay from "./UserCountDisplay";
import LoginDisplay from "./LoginDisplay";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">This is the Login Display</div>
        <UserCountDisplay />
        <LoginDisplay />
      </>
    );
  }
}

export default App;
