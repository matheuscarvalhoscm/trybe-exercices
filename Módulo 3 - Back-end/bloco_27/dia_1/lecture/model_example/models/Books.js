const connection = require('./connection');

const isValid = (title, author_id) => {
  if (!title || title.length < 3 || typeof title !== 'string') return false;
  if (!author_id || typeof author_id !== 'number') return false;

  return true;
};

const getAllBooks = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books;'
  );
  
    return books;
};

const getByAuthorId = async (id) => {
  const [book] = await connection.execute(
    'SELECT * FROM model_example.books WHERE author_id = ?', [id]
  );

  return book;
};

const createBook = async (title, author_id) => {
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
    [title, author_id]
  );
};

module.exports = { 
  getAllBooks,
  getByAuthorId,
  isValid,
  createBook,
};
