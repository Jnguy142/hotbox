import React, { Component } from 'react';
import './App.css';
import Chatbox from './chat_components/Chatbox'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to HoTBoX Chat Client</h2>
        </div>
        <Chatbox />
      </div>
    );
  }
}

export default App;
