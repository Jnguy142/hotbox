import React, { Component } from 'react'
import './messageBox.css'

class Messagebox extends Component {
  render () {
    return (
      <div className='chat-form'>
        <textarea className='user-message'></textarea>
        <button className='send-button' onClick={this.props.handleSendButton}>Send</button>
      </div>
    );
  }
}
export default Messagebox;