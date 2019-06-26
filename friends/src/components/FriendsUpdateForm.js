import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 export default class FriendUpdateForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const friendId = this.props.match.params.friendId;
        const friend = this.props.data.find( friend => friendId === `${friend.id}`)
        console.log(this.props.data)
        return (
        <div className="form-wrapper">
            <form onSubmit={this.props.updateFriend} className="form-wrapper">
                <div>
                    <input id="name" className="form-control form-control-lg" type="text" placeholder={friend.name}/>
                    <input id="age" className="form-control form-control-lg" type="text" placeholder={friend.age}/>
                    <input id="email" className="form-control form-control-lg" type="email" placeholder={friend.email}/>
                </div>
                <div>
                <button className="btn btn-primary">Update Friend</button>
                </div>
                <p className="friend-id">{friend.id}</p>
            </form>
        </div>
        )
    }
}