import React, { Component } from 'react';

import './Friends.css'

 export default class FriendCard extends Component {
  
   render() {
    return (
        <div>
            <h1>{this.props.friend.name}</h1>
            <p>{this.props.friend.age}</p>
            <p>{this.props.friend.email}</p>
            <p className="friend-id">{this.props.friend.id}</p>
            <div >
                <button onClick={e => this.props.setUpdate(e, this.props.friend.id)}>Update Friend</button>
                <button onClick={e => this.props.deleteFriend(e, this.props.friend.id)}>Delete Friend</button>
            </div>
        </div>
    )
  }
}