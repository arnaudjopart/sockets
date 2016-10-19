var moment = require('moment');
var now = moment();

// console.log(now.format('X'));
console.log(now.valueOf());

var timestamp = now.valueOf();
var timestampMoment = moment.utc(timestamp);

timestampMoment.local();

console.log(timestampMoment.format("h:mm a "));
