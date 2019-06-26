import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Friends.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Friend List App</h1>
        <Link to="/home">Home</Link>
      </div>
    );
  }
}
