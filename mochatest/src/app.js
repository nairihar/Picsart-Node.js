const express = require('express')
const app = express()

// delete require.cache[path.resolve('...')]

app.get('/', (req, res) => {

  res.send('Hello World!')
});

module.exports = app;