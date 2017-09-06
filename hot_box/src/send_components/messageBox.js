import React, { Component } from 'react'
import './messageBox.css'

class Messagebox extends Component {
  render () {
    return (
      <div className='chat-form'>
        <div>username: 
          <input className='user-name-field'></input>
        </div>
        <button className='send-button' onClick={this.props.handleSendButton}>Send</button>
        <textarea className='user-message'></textarea>
      </div>
    );
  }
}
export default Messagebox;