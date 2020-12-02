var redis = require("redis");

var socketSubscriber = redis.createClient();

socketSubscriber.on("message", function(ch, message) {
 console.log(ch, message);
});

socketSubscriber.subscribe('not');

