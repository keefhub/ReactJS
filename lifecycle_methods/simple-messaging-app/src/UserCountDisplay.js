import React, { Component } from "react";
import { fetchUserCount } from "./AjaxLibrary";
import "./App.css";

class UserCountDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCount: 0,
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const userCount = await fetchUserCount();
    this.setState({ userCount, loading: false });
  }

  renderProfile() {
    if (this.state.loading) {
      return <p>loading...</p>;
    } else {
      return <p>the number of users in the app: {this.state.userCount}</p>;
    }
  }

  render() {
    if (this.state.loading) {
      return <p>loading...</p>;
    } else {
      return <p>the number of users in the app: {this.state.userCount}</p>;
    }
  }
}
export default UserCountDisplay;
