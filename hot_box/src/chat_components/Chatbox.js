import React, { Component } from 'react'
import Chatlogs from './Chatlogs'
import './chatbox.css'
class Chatbox extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="chatbox" >
        <div className="chatlogs">
          {
            this.props.messages.map(function (message) {
              return <Chatlogs message={message} />
            })
          }
        </div>
      </div>
    );
  }
}

export default Chatbox;