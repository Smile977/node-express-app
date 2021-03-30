const { v4: uuidv4 } = require('uuid');

const todos = [
  {id: uuidv4(), title: 'Second todo', complited: true},
  {id: uuidv4(), title: 'One more todo', complited: true},
  {id: uuidv4(), title: 'The next todo', complited: false},
  {id: uuidv4(), title: 'Last todo', complited: false},
];

module.exports = todos;