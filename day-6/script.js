

var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'secret');


console.log(token)
