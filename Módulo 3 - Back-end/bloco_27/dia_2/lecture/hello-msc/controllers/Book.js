const Book = require('../services/Book');

const getAllBooks = async (_req, res) => {
  try {
    const books = await Book.getAllBooks();
  
    return res.status(200).json(books);
    
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

const getByAuthorId = async (req, res) => {
  try {
    const { author_id } = req.params;
  
    const book = await Book.getByAuthorId(author_id);
  
    if (!book || book.length === 0) res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);

  } catch (e) {
    return res.status(500).json(e.message);
  }
};

const createBook = async (req, res) => {
  const { title, author_id } = req.body;

  const book = await Book.createBook(title, author_id);

  if (!book) return res.status(400).json({ message: 'Invalid Input' });
  
  Book.createBook(title, author_id);

  return res.status(201).json({ message: 'Book created successfully' });
}

module.exports = {
  getAllBooks,
  getByAuthorId,
  createBook,
}
