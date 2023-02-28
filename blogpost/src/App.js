import React, { Component, useState } from "react";

class fieldlength extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPost: "",
      charactercount: 0,
      errors: [],
    };
  }

  TextArea() {
    return (
      <div>
        <textarea
          type="text"
          onChange={(e) =>
            this.setState({ charactercount: this.state.value.length })
          }
        />
        <br />
        <button onClick={this.submitBlog}>submit post</button>
      </div>
    );
  }

  submitBlog() {
    alert("submit blog?");
  }

  render() {
    return (
      <div className="fieldlength">
        <h1>Blog Post Writer</h1>
        <hr />
        <h4>Write your post here</h4>
        {this.TextArea()}
        <p>character count: {this.state.charactercount}</p>
      </div>
    );
  }
}

export default fieldlength;
