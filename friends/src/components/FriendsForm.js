import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Friends.css";

export default class FriendForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.props.addFriend} className="form-wrapper">
          <div>
            <input
              onChange={this.props.handleChanges}
              id="name"
              className="input"
              type="text"
              placeholder="Name"
            />
            <input id="age" className="input" type="text" placeholder="Age" />
            <input
              id="email"
              className="input"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <button>Add Friend</button>
          </div>
        </form>
        <Link to="/home/friends"> View Friends </Link>
        <Link to="/home"> Hide Friends </Link>
      </div>
    );
  }
}
