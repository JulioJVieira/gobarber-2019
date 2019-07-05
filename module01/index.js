const express = require('express');

const server = express();

// Query params = ?teste=1
// Routes params = /users/1
// Request body = { "name": "Diego", "email": "julio@rocketseat.com.br"}

const users = ['Julio', 'Diego', 'João'];

server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

server.listen(3000);
