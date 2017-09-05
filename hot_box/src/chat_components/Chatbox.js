import React, { Component } from 'react'
import Chatlogs from './Chatlogs'
import './chatbox.css'

class Chatbox extends Component {
  render () {
    return (
      <div className="chatbox">
        <div className="chatlogs">
          <Chatlogs />
          <Chatlogs />
        </div>
      </div>
    );
  }
}

export default Chatbox;