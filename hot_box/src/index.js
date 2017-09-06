import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import get_messages from './services/request_msg.js'
import send_message from './services/send_message.js'

ReactDOM.render(<App get_messages={get_messages} send_message={send_message}/>, document.getElementById('root'));
registerServiceWorker();
