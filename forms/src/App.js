import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordConfirmation: "",
      email: "",
      errors: [],
    };
    // this is how in-line bind looks like validateUsernameOnBlur = this.validateUsernameOnBlur.bind(this);
    this.validateUsernameOnBlur = this.validateUsernameOnBlur.bind(this);
    this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this);
    this.validatePasswordConfirmationOnBlur =
      this.validatePasswordConfirmationOnBlur.bind(this);
    this.validateEmailOnBlur = this.validateEmailOnBlur.bind(this);
  }

  displayForm() {
    return (
      <div>
        Username: <input type="text" onBlur={this.validateUsernameOnBlur} />
        <br />
        Password: <input type="text" onBlur={this.validatePasswordOnBlur} />
        <br />
        Password Confirmation:{" "}
        <input type="text" onBlur={this.validatePasswordConfirmationOnBlur} />
        <br />
        Email: <input type="text" onBlur={this.validateEmailOnBlur} />
        <br />
        <br />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }

  dispalyErrors() {
    return (
      <div className="errors">
        {this.state.errors.map((err, i) => (
          <p key={`err-${i}`}>{err}</p>
        ))}
      </div>
    );
  }

  submitForm(event) {
    console.log("submitting the form now...");
    console.log(event);
  }

  validateUsernameOnBlur(event) {
    const username = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Username", username));
    this.setState({ username, errors });
  }

  validatePasswordOnBlur(event) {
    const password = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Password", password));
    this.setState({ password, errors });
  }

  validateEmailOnBlur(event) {
    const email = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Email", email));
    this.setState({ email, errors });
  }

  //ensure password confirmation to ensure it matches password
  validatePasswordConfirmationOnBlur(event) {
    const passwordConfirmation = event.target.value;
    const errors = this.state.errors;
    errors.push(
      this.validateNotEmpty("Password Confirmation", passwordConfirmation)
    );
    this.setState({ passwordConfirmation, errors });

    if (passwordConfirmation !== this.state.password) {
      errors.push("Password must match password confirmation");
    }
    this.setState({ passwordConfirmation, errors });
  }

  validateNotEmpty(fieldName, value) {
    if (value.length <= 0) {
      return `${fieldName} must be filled out`;
    }
  }

  validateEmailFormat(fieldName, value) {
    let [lhs, rhs] = value.split("@");
    lhs = lhs || ""; //what is this for
    rhs = rhs || "";
    if (lhs.length <= 0 || rhs.length <= 0) {
      return `${fieldName} must be in a standard email format`;
    }
  }

  render() {
    return (
      <div className="App">
        Create Account
        {this.dispalyErrors()}
        <hr />
        {this.displayForm()}
      </div>
    );
  }
}

export default App;
