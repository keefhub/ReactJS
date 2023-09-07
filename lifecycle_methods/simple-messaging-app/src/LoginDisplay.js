import React, { Component } from "react";
import { fetchUser } from "./AjaxLibrary";
import UserDisplay from "./UserDisplay";
import "./App.css";

class LoginDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: null,
      loading: false,
      User: null,
    };

    this.updateLoginForm = this.updateLoginForm.bind(this);
    this.doLogin = this.doLogin.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }

  updateLoginForm(e) {
    const Username = e.target.value;
    this.setState({ Username });
  }

  async doLogin() {
    this.setState({ loading: true });
    const User = await fetchUser(this.state.Username);
    this.setState({ User, loading: false });
  }

  doLogout() {
    this.setState({ User: null });
  }

  loginForm() {
    if (this.state.User) {
      return "logging in.. please wait";
    } else {
      if (!this.state.User) {
        return (
          <div className="login">
            <label>Login Username:</label>
            <input
              type="text"
              placeholder="input username here"
              onChange={this.updateLoginForm}
            ></input>
            <button onClick={this.doLogin}>Login</button>
          </div>
        );
      } else {
        return <button onClick={this.doLogout}>Log Out</button>;
      }
    }
  }

  render() {
    return (
      <div className="login-display">
        {this.loginForm()} <hr /> <UserDisplay user={this.state.User} />
      </div>
    );
  }
}

export default LoginDisplay;
