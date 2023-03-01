import React, { Component, useState } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: "",
    };
  }

  renderFieldLength() {
    return <p>{`${this.state.field.length} character(s)!`}</p>;
  }
  updateFieldLength(event) {
    const field = event.target.value;
    this.setState({ field });
  }

  submitForm() {
    alert("hello");
    console.log("submitting form...");
  }

  render() {
    return (
      <div className="App">
        <h1>Blog Post Writer</h1>
        <hr />
        <strong>Write your blog post here</strong>
        <p>Must be at least 100 characters</p>
        <textarea
          cols="80"
          rows="25"
          onChange={this.updateFieldLength.bind(this)}
        ></textarea>
        <br />
        {this.renderFieldLength()}
        <button onClick={this.submitForm}>submit post</button>
      </div>
    );
  }
}

export default App;
