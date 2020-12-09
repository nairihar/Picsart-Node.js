const express = require('express')
const morgan = require('morgan')
const app = express()

// delete require.cache[path.resolve('...')]

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send(`${Date.now()} : ${process.env.PORT}`)
});

module.exports = app;