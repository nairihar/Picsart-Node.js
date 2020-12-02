var redis = require("redis");

var apiPublisher = redis.createClient();

apiPublisher.publish("not", JSON.stringify({
  username: 'nairihar',
  time: Date.now(),
}), function() {
 console.log('done');
});

