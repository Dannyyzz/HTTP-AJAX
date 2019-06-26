import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

 import './Friends.css'

 export default class FriendCard extends Component {
    constructor(props) {
        super(props);
    }

   render() {
    return (
        <div className="list-group-item">
            <h1>{this.props.friend.name}</h1>
            <p>{this.props.friend.age}</p>
            <p>{this.props.friend.email}</p>
            <p className="friend-id">{this.props.friend.id}</p>
            <div class="btn-group-vertical">
                <Link to={`/update/${this.props.friend.id}`} className="btn btn-info">Update Friend</Link>
                <button onClick={e => this.props.deleteFriend(e, this.props.friend.id)} className="btn btn-danger">Delete Friend</button>
            </div>
        </div>
    )
  }
}