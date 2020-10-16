const express = require('express')
const authRouter = express.Router();


function signIn(req, res) {


  res.set('token', 'dadlasndnada')
  res.json()
}

function signUp(req, res) {
  
}

authRouter
  .post('/signin', signIn)
  .post('/signup', signUp);

module.exports = authRouter;
