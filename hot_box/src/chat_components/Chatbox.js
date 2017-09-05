import React, { Component } from 'react'
import Chatlogs from './Chatlogs'

class Chatbox extends Component {
  render () {
    return (
      <div class = "chatbox">
        <Chatlogs />
      </div>
    );
  }
}

export default Chatbox;