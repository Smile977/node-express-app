const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
      {id: 1, title: 'Second todo', complited: true},
      {id: 2, title: 'One more todo', complited: true},
      {id: 3, title: 'The next todo', complited: false},
      {id: 4, title: 'Last todo', complited: false},
    ]);
  });

module.exports = router;
