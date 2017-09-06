import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import get_messages from './services/request_msg.js'

ReactDOM.render(<App get_messages={get_messages} />, document.getElementById('root'));
registerServiceWorker();
