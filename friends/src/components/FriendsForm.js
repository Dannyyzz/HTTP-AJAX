import React, { Component } from "react";
import "./Friends.css";

export default class FriendForm extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <form className="form-wrapper">
          <div>
            <input className="input" type="text" placeholder="name" />
            <input className="input" type="text" placeholder="age" />
            <input className="input" type="text" placeholder="email" />
          </div>
          <div>
            <button>Add Friend</button>
            <button>Update Friend</button>
            <button>Delete Friend</button>
          </div>
        </form>
      </div>
    );
  }
}
