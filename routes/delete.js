const express = require('express');
const path = require('path');
const router = express.Router();

let todos = require('../data/todos');

router.delete('/todos/:id/delete', (req, res) => {
  const id = req.params.id;  
  todos = todos.filter(todo => todo.id !== id);
  res.setHeader('Content-type', 'application/json');
  res.send(JSON.stringify(todos));
});

module.exports = router;
