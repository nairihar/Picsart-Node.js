const express = require('express')
const usersRouter = express.Router();


async function getUser(req, res, next) {
  req.user
  try {
    // await 
  } catch(err) {
    next(err);
  }
}

function updateUser(req, res) {
  Promise
    .then(() => {

    })
    .catch(next)
}

usersRouter
  .get('/me', getUser)
  .put('/me', updateUser);

module.exports = usersRouter;
