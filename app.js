const express = require('express');
const path = require('path');
const app = express();
const port = 3005

app.use(express.static(path.join(__dirname, 'public')));

app.get('/quiz-db', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'quiz-db.html'))
});

app.get('/quiz-web', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'quiz-web.html'))
});

app.get('/quiz-poo', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'quiz-poo.html'))
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`)
});