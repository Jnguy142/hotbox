import React, { Component } from 'react'
import Chatlogs from './Chatlogs'
import './chatbox.css'
import get_messages from '../services/request_msg.js'
class Chatbox extends Component {
  render () {
    return (
      <div className="chatbox" onClick={get_messages}>
        <div className="chatlogs">
          <Chatlogs />
          <Chatlogs />
        </div>
      </div>
    );
  }
}

export default Chatbox;