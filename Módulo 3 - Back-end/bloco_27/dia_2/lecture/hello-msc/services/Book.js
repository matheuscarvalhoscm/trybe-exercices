const Book = require('../models/Book');
const Author = require('../models/Author');

const isValid = (title, author_id) => {
  if (!title || title.length < 3 || typeof title !== 'string') return false;
  if (!author_id || typeof author_id !== 'number') return false;

  return true;
};

const getAllBooks = async () => {
  const books = await Book.getAllBooks();

  return books;
};

const getByAuthorId = async (id) => {
  const book = await Book.getByAuthorId(id);

  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um livro com o id ${id}`,
      }
    }
  }

  return book;
};

const createBook = async (title, author_id) => {
  const allBooks = await Book.getAllBooks();
  const authorExists = await allBooks.some((book) => book.author_id === author_id);
  
  if (!isValid(title, author_id) || !authorExists) return null;
  
  return Book.createBook(title, author_id);
}

module.exports = {
  isValid,
  getAllBooks,
  getByAuthorId,
  createBook,
}