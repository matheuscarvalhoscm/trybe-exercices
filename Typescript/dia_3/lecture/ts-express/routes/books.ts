import { Router, Request, Response } from 'express';
import { read, write } from '../utils/functions';
import StatusCode from '../utils/dictionary';
import validateBook from '../middlewares/validationBook';
import Book from '../interfaces/Book';

const router = Router();
const NotFound = 'Livro não encontrado.';

router.get('/books', async (_req: Request, res: Response) => {
  const books = await read();
  return res.status(StatusCode.OK).json(books);
});

router.get('/books/:isbn', async (req: Request, res: Response)=> {
  const { isbn } = req.params;
  const books = await read();
  const book = books.find((book) => book.isbn === isbn);

  if (!book) return res.status(StatusCode.NOT_FOUND).send(NotFound);

  return res.status(StatusCode.OK).json(book);
});

router.post('/books/', validateBook, async (req: Request, res: Response)=> {
  const book: Book = req.body;
  const books = await read();
  
  books.push(book);

  await write(books);

  return res.status(StatusCode.CREATED).json(book);
});

router.put('/books/:isbn', validateBook, async (req: Request, res: Response)=> {
  const { isbn } = req.params;
  const book: Book = req.body;
  const books = await read();
  const index = books.findIndex(book => book.isbn === isbn);

  if (index === -1) return res
    .status(StatusCode.NOT_FOUND)
    .send(NotFound);
  
  books.splice(index, 1, book);

  await write(books);

  return res.status(StatusCode.OK).json(book);
});

router.delete('/books/:isbn', async (req: Request, res: Response)=> {
  const { isbn } = req.params;
  const books = await read();
  const index = books.findIndex(book => book.isbn === isbn);

  if (index === -1) return res
    .status(StatusCode.NOT_FOUND)
    .send(NotFound);
  
  books.splice(index, 1);

  await write(books);

  return res.status(StatusCode.NO_CONTENT).send();
});

export default router;
