import express, { Request, Response } from 'express';
import BooksRouter from './routes/books';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(BooksRouter);

app.use('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript')
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
