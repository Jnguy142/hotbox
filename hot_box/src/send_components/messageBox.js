import React, { Component } from 'react'
import './messageBox.css'

class Messagebox extends Component {
  render () {
    return (
      <div className='chat-form'>
        <textarea></textarea>
        <button className='send-button'>Send</button>
      </div>
    );
  }
}
export default Messagebox;