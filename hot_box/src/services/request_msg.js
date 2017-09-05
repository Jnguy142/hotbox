import jQuery from 'jquery';
var get_messages = function () {
  
  console.log('hi');
  jQuery.ajax('http://chattercube.thirdtape.com/messages',{
    type: 'GET',
    success: function (data) {
      console.log(data);
    },
    error: function () {
      console.log('failed get request');
    }
  });
};

export default get_messages;