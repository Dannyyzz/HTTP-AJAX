import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Friends.css";

export default class FriendForm extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.props.addFriend} className="form-wrapper">
          <div>
            <input
              onChange={this.props.handleChanges}
              value={this.props.newFriend.name}
              name="name"
              type="text"
              placeholder="Name"
            />
            <input
             onChange={this.props.handleChanges} 
             value={this.props.newFriend.age} 
             name="age" 
             type="text" 
             placeholder="Age" 
             />
            <input
              onChange={this.props.handleChanges}
              value={this.props.newFriend.email} 
              name="email"
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
