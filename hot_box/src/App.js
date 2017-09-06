import React, { Component } from 'react';
import './App.css';
import Chatbox from './chat_components/Chatbox'

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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to HoTBoX Chat Client</h2>
        </div>
        <div className='chat-container' onClick={this.getAllMessages.bind(this)}>
          <Chatbox messages={this.state.messages} />
        </div>
      </div>
    );
  }
}

export default App;
