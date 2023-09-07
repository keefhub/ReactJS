import "./App.css";
import React, { Component } from "react";
import Message from "./Message";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, messsage: "hello" },
        { id: 2, message: "Everyone" },
        { id: 3, message: "what" },
        { id: 4, message: "is" },
        { id: 5, message: "up" },
      ],

      removeItem(id) {
        const newList = this.state.list.filter((item) => item.id !== id);
        this.setState({ list: newList });
      },
    };
  }

  componentWillUnmount() {
    console.log("removing item", this.props);
  }

  render() {
    return (
      <div className="App">
        <h1> My Class Name</h1>
        {this.state.list.map((item) => (
          <Message
            key={item.id}
            id={item.id}
            message={item.message}
            removeItem={this.state.removeItem.bind(this)}
          />
        ))}
      </div>
    );
  }
}

export default App;
