const express = require('express');

const server = express();

// Query params = ?teste=1
// Routes params = /users/1
// Request body = { "name": "Diego", "email": "julio@rocketseat.com.br"}

server.get('/users/:id', (req, res) => {
  const { id } = req.params;

  return res.json({ message: `Buscando o usuário ${id}` });
});

server.listen(3000);
