const express = require('express');
const path = require('path');
const router = require('./routes/router');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use('/', router);

app.use((req, res, next) => {
  res.status(404);
  res.sendFile(path.join(__dirname, 'views', 'error.html'));
  next();
})

app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}...`);
})


