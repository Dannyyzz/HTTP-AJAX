import React, { Component } from 'react';

 export default class FriendsUpdateForm extends Component {
    render() {
        const friendId = this.props.match.params.friendId;
        const friend = this.props.data.find( friend => friendId === `${friend.id}`)
        console.log(this.props.newFriend)
        return (
        <div className="form-wrapper">
            <form onSubmit={e => this.props.updateFriend(e, friendId)} className="form-wrapper">
                <div>
                    <input onChange={this.props.handleChanges} name="name"  type="text" placeholder={friend.name} value={this.props.newFriend.name}/>
                    <input onChange={this.props.handleChanges} name="age"  type="text" placeholder={friend.age} value={this.props.newFriend.age}/>
                    <input onChange={this.props.handleChanges} name="email"  type="email" placeholder={friend.email} value={this.props.newFriend.email}/>
                </div>
                <div>
                <button>Update Friend</button>
                </div>
                <p className="friend-id">{friend.id}</p>
            </form>
        </div>
        )
    }
}