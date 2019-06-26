import React, { Component } from "react";
import "./Friends.css";

export default class FriendForm extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit= {this.setState.props.addFriend} className="form-wrapper">
          <div>
            <input onChange={this.props.handleChanges} id="name" className="input" type="text" placeholder="Name" />
            <input id="age" className="input" type="text" placeholder="Age" />
            <input id="email" className="input" type="email" placeholder="Email" />
          </div>
          <div>
            <button>Add Friend</button>
          </div>
        </form>
      </div>
    );
  }
}
