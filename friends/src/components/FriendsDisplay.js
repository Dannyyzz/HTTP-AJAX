import React, { Component } from "react";
import "./Friends.css";

export default class FriendsDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="friends-wrapper">
        {this.props.data.map(friend => (
          <form onSubmit={this.props.deleteFriend} className="friend-card">
            <h1>{friend.name}</h1>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <button>Update Friend</button>
          </form>
        ))}
      </div>
    );
  }
}
