const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

let todos = require('../data/todos');
const findId = require('../utils/utils');
const { CONTENT_TYPE_JSON, ERROR_404 } = require('../constants');

router.get('/todos', (req, res) => {
  res.json(todos);
});

router.post('/todos/add', (req, res) => {
  const newTodo = {id: uuidv4(), title: req.body.title, complited: false};
  todos = [newTodo, ...todos];
  res.set(CONTENT_TYPE_JSON);
  res.send(todos);
})

router.delete('/todos/:id', (req, res) => {
  const {id} = findId(todos, req.params.id) || false;
  if (id) {
    todos = todos.filter(todo => todo.id !== id);
    res.set(CONTENT_TYPE_JSON);
    return res.send(todos);
  }
  return res.send(ERROR_404);
});

router.put('/todos/:id', (req, res) => {
  const {id} = findId(todos, req.params.id) || false;
  if (id) {
    todos = todos.map(todo => todo.id === id ? {...todo, complited: !todo.complited} : todo);
    res.set(CONTENT_TYPE_JSON);
    return res.send(JSON.stringify(todos));
  } 
  return res.send(ERROR_404);
});

module.exports = router;
