import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSecret: false,
    };
  }

  // this is conditional renderer
  secretMessage() {
    if (!this.state.showSecret) {
      return;
    } //this is a guard clause; to be added at the top of the function to avoid unnecessary work
    return <div className="secret-mesasge">I am the secret message</div>;
  }

  toggleSecretMessage() {
    this.setState({
      showSecret: !this.state.showSecret,
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleSecretMessage.bind(this)}>
          Click to {this.state.showSecret ? "hide" : "show"} the secret message!
        </button>
        {this.secretMessage()}
      </div>
    );
  }
}

export default App;
