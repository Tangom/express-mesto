const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const pageNotFound = require('./routes/pageNotFound');

const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.user = {
    _id: '5fe8e04830465a1aa46719f0',
  };
  next();
});

app.use('/', usersRouter);
app.use('/', cardsRouter);
app.use('*', pageNotFound);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
