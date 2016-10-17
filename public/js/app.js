var socket = io("http://localhost:3000");
console.log("Test");
socket.on('connect',function(){
  console.log('Connected to socket.io server!');
});

var $messages = jQuery('.messages');
var $form = jQuery('#message-form');

$form.on('submit',function(event){
	event.preventDefault();
	var $message = $form.find('input[name=message]');
	socket.emit('message',{text:$message.val()});
	$message.val("");
});

socket.on('message',function(message){
  console.log("new message: "+message.text);
  $messages.append("<p>"+message.text+"<p>");
});
