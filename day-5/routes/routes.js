const express = require('express')

const authRouter = require('./auth');
const usersRouter = require('./users');

const router = express.Router();

// public
router.use(authRouter);

const privateRoutes = [ '/user']

function checkPublicOrPrivate(req, res, next) {
  // path <-> req
  return next()

  authorization(req, res, next);
}


function authorization(req, res, next) {
  const { token } = req.headers;

   // check token
   // verify

   req.user = // user

  next(new Error())
   // if valid next()
   // res.status(403).send('Forb...)
}

router.use(authorization, usersRouter);

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

// eslint-disable-next-line
app.use(function (err, req, res, next) {
  
})

module.exports = router;
