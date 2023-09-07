import React, { Component } from "react";
import "./App.css";

class UserDisplay extends Component {
  render() {
    if (!this.props.User) {
      return null;
    }
    return <div className="user-display">{this.props.User.username}</div>;
  }
}

export default UserDisplay;
