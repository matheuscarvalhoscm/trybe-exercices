import express, { Request, Response } from 'express';
import router from './routes';

const app = express();
const PORT = 8080;

app.use(router.users);

app.listen(PORT, () => {
  console.log(`ouvindo na porta: ${PORT}`);
});
