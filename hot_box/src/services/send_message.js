import axios from 'axios'

var send_message = function (message) {
  return axios.post('http://chattercube.thirdtape.com/messages', {
    username: message.username,
    message: message.message
  });  
};

export default send_message;