import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from "./components/Header";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }


render() {
  return (
    <div className= "App">
      <Header />
    </div>
  );
}
}

export default App;
