const connection = require('./connection');

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

const getByAuthorId = async (id) => {
  return connection()
    .then((db) => db.collection('books').find({ author_id: Number(id) }).toArray())
};

const createBook = async (title, author_id) => {
  const conn = await connection();
  const query = await conn.collection('books').insertOne({ title, author_id });

  return query;
};

module.exports = { 
  getAllBooks,
  getByAuthorId,
  createBook,
};