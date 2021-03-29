const express = require('express');
const path = require('path');
const todosRouter = require('./routes/todos');
const addRouter = require('./routes/add');
const deleteRouter = require('./routes/delete');
const updateRouter = require('./routes/updata');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use('/todos', todosRouter);
app.use('/todos/add', addRouter);
app.use(deleteRouter);
app.use(updateRouter);

app.use((req, res, next) => {
  res.status(404);
  res.sendFile(path.join(__dirname, 'views', 'error.html'));
})

app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}...`);
})


