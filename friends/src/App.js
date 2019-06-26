import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import FriendsForm from "./components/FriendsForm";
import FriendsDisplay from "./components/FriendsDisplay";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" render={props => <FriendsDisplay {...props} data={this.state.data}/>}/>
        <FriendsForm />
      </div>
    );
  }
}

export default App;
