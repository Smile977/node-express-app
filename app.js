const express = require('express');
const path = require('path');
const router = require('./routes/routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use('/todos', router);
app.use((req, res, next) => {
  res.status(404);
  res.sendFile(path.join(__dirname, 'views', 'error.html'));
})

app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}...`);
})


