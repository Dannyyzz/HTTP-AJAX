import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
            <div>
            <Link to={`/update/${friend.id}`}>Update Friend</Link>
            <button>Delete Friend</button>
            </div>
          </form>
        ))}
      </div>
    );
  }
}
