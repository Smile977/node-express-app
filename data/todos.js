const uniqid = require('uniqid');

const todos = [
  {id: uniqid(), title: 'Second todo', complited: true},
  {id: uniqid(), title: 'One more todo', complited: true},
  {id: uniqid(), title: 'The next todo', complited: false},
  {id: uniqid(), title: 'Last todo', complited: false},
];

module.exports = todos;