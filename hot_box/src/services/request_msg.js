import axios from 'axios';
var get_messages = function () {
  return axios.get('http://chattercube.thirdtape.com/messages');
};

export default get_messages;