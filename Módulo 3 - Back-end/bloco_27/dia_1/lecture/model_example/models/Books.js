const connection = require('./connection');
const { ObjectId } = require('mongodb');

const isValid = (title, author_id) => {
  if (!title || title.length < 3 || typeof title !== 'string') return false;
  if (!author_id || typeof author_id !== 'number') return false;

  return true;
};

// // USING MySQL:
// const getAllBooks = async () => {
//   const [books] = await connection.execute(
//     'SELECT * FROM model_example.books;'
//   );
  
//     return books;
// };

// // USING MongoDB:
const getAllBooks = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
      .then((books) =>
      books.map(({ _id, title, author_id }) => {
        return {
          _id,
          title,
          author_id
        }
      }) 
    )
};

// // USING MySQL:
// const getByAuthorId = async (id) => {
//   const [book] = await connection.execute(
//     'SELECT * FROM model_example.books WHERE author_id = ?', [id]
//   );

//   return book;
// };

// // USING MongoDB
const getByAuthorId = async (id) => {
  return connection()
    .then((db) => db.collection('books').find({ author_id: Number(id) }).toArray())
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
