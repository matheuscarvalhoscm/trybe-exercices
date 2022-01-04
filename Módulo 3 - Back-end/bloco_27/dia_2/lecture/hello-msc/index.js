// hello-msc/index.js

const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./controllers/Author');
const Books = require('./controllers/Book');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.create);

app.get('/books', Books.getAllBooks);

app.get('/books/:author_id', Books.getByAuthorId);

app.post('/books', Books.createBook);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});