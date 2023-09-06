import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: ["hello world, how are you?"],
      loading: true,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          messages: ["hello world, how are you?"],
        }),
      10000
    );
  }

  renderProfile() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (this.state.messages && this.state.messages.length > 0) {
      return (
        <ul>
          {this.state.messages.map((msg, index) => (
            <li key={`msg-${index}`}>{msg}</li>
          ))}
        </ul>
      );
    } else {
      return <div>No message!</div>;
    }
  }

  render() {
    return (
      <div className="App">
        User renderProfile
        <hr />
        {this.renderProfile()}
      </div>
    );
  }
}

export default App;
