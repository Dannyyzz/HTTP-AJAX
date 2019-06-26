import React, { Component } from "react";
import "./Friends.css";

export default class FriendForm extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <form className="form-wrapper">
          <div>
            <input className="input" type="text" placeholder="Name" />
            <input className="input" type="text" placeholder="Age" />
            <input className="input" type="email" placeholder="Email" />
          </div>
          <div>
            <button>Add Friend</button>
            <button>Delete Friend</button>
          </div>
        </form>
      </div>
    );
  }
}
