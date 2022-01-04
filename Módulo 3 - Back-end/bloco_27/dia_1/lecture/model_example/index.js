const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');
const Books = require('./models/Books');
const User = require('./models/User');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/authors', async (_req, res) => {
  try {
    const authors = await Author.getAllAuthors();
  
    if (!authors) res.status(500).json({ message: 'Internal Error' });
    
    return res.status(200).json(authors);

  } catch (error) {
    return res.status(500).json(error.message);
  }
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.getAuthorById(id);

  !author ? res.status(404).json({ message: 'Author Not Found'}) : res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Invalid Input' });
  }

  await Author.createAuthor(first_name, middle_name, last_name);

  return res.status(201).json({ message: 'Author created successfully' });
});

app.get('/books', async (_req, res) => {
  try {
    const books = await Books.getAllBooks();
  
    return res.status(200).json(books);
    
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

app.get('/books/:author_id', async (req, res) => {
  try {
    const { author_id } = req.params;
  
    const book = await Books.getByAuthorId(author_id);
  
    if (!book || book.length === 0) res.status(404).json({ message: 'Book not found' });
  
    return res.status(200).json(book);

  } catch (e) {
    return res.status(500).json(e.message);
  }
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  const authorId = await Author.checkAuthorId(author_id);

  if (authorId.length === 0 || !Books.isValid(title, author_id)) 
    return res.status(400).json({ message: 'Invalid Input' });
  
  Books.createBook(title, author_id);

  return res.status(201).json({ message: 'Book created successfully' });
});

app.post('/users', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  
  if (!User.validateData(firstName, lastName, email, password))
    return res.status(400).json({ error: true, message: 'Invalid Data' });

  const user = await User.createUser(firstName, lastName, email, password);
  
  return res.status(201).json({
    id: user.insertedId,
    firstName,
    lastName,
    email,
  })

});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}` )
});
