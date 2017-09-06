import React, { Component } from 'react'
class Chatlogs extends Component {
  render () {
    return (
        <div className="chat"> 
          <span className="user-name">{this.props.message.username}:</span>
          <p className="chat-message">{this.props.message.message}</p>
        </div>
    );
  }
}

export default Chatlogs;