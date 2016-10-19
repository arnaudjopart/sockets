var socket = io();

socket.on('connect', function () {
	console.log('Conncted to socket.io server!');
});

socket.on('message', function (message) {
	var momentTimespan = moment.utc(message.timestamp);
	console.log('New message:');
	console.log(message.text);

	jQuery('.messages').append('<p><strong>'+momentTimespan.local().format("h:mm a")+'</strong> : ' + message.text + '</p>');
});

// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
	event.preventDefault();
	var now = moment();
	var $message = $form.find('input[name=message]');
	var timespan = now.valueOf();
	socket.emit('message', {
		text: $message.val(),
		timespan: timespan
	});

	$message.val('');
});
