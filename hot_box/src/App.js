import React, { Component } from 'react';
import './App.css';
import Chatbox from './chat_components/Chatbox'
import Messagebox from './send_components/messageBox'
import jquery from 'jquery'

class App extends Component {
  constructor (props) {
    super(props);
  
    this.state = {
      messages: []
    };
  }

  componentDidMount () {
    this.getAllMessages.call(this);
  }

  updateMessages (messages) {
    this.setState({ messages:messages });
  }

  getAllMessages () {
    var context = this;
    this.props.get_messages().then(res => {
      context.updateMessages(res.data.messages);
    }).catch(res => console.log(res));

  }
  
  sendMessage () {
    var context = this;
    var message = jquery('.user-message').val();
    var username = jquery('.user-name-field').val();
    var messageToSend = {username: username, message: message};
    this.props.send_message(messageToSend)
    .then(context.getAllMessages())
    .catch(res => console.log(res));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to HoTBoX Chat Client</h2>
        </div>
        <div className='chat-container' onClick={this.getAllMessages.bind(this)}>
          <Chatbox messages={this.state.messages} />
          <Messagebox handleSendButton={this.sendMessage.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
