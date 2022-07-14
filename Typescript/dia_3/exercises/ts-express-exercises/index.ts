import express, { Request, Response } from 'express';

const app = express();
const PORT = 8080;

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Fonfou');
});

app.listen(PORT, () => {
  console.log(`ouvindo na porta: ${PORT}`);
})
