const http = require('http');

const users = []

// GET API/users
// POST API/users {}

// DELETE http://localhost:3000/users/50000
// user_id: 50000

fetch({
  methos: 'POST'
})

//create a server object:
http.createServer((request, response) => {
  response.write(`Hello World! ${count++}`);
  response.end();
})
.listen(3000, () => {
  console.log('Server runnning');
});




function callbackify(promise) {
  return function(cb) {
    // arguments
    promise(...).then(data => {
      cb(null, data);
    }).catch(err => cb(err));
  }
}

foo(1,2,3 () => {

})