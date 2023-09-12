import "./Profile.css";
import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <section>
          <header>
            <h1>{this.props.user.name}</h1>
          </header>
          <div className="profile-content">
            <div className="profile-image">
              <img
                src={this.props.user.image}
                alt={this.props.user.name}
                style={{ height: "300px", width: "450px" }}
              />
            </div>
            <div className="user-profile">
              <strong>Age:</strong> {this.props.user.age} <br />
              <strong>Favourite Colour:</strong> {this.props.user.color} <br />
              <strong>Favourite Movie:</strong> {this.props.user.movie}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
