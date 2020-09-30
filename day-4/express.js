const express = require('express');
var cors = require('cors')

const app = express() // koa

const users = ['Narek', 'Aram']

app.use(cors())

app.get('/user/:user_id', (req, res) => {
  const { user_id } = req.params;
  if (users[user_id]) {
    return res.send(users[user_id]);
  }
  res.status(404).send('Not found');
})

app.post('/users', (req, res) => {
  req.on('data', data => {
    const user = data.toString();

    if (user) {
      users.push(user);
      return res.status(201).send(`Welcome ${user}`);
    }

    res.send(`Invalid input`);
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at ${port} port`)
})

const port2 = process.env.PORT || 4000;

app.listen(port2, () => {
  console.log(`Server running at ${port2} port`)
})