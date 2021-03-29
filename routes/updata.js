const express = require('express');
const path = require('path');
const router = express.Router();

let todos = require('../data/todos');

router.put('/todos/:id/update', (req, res) => {
  const id = req.params.id;  
  const todoComplited = todos.find(todo => todo.id === id);
  todoComplited.complited = !todoComplited.complited;
  res.setHeader('Content-type', 'application/json');
  res.send(JSON.stringify(todos));
});

module.exports = router;
