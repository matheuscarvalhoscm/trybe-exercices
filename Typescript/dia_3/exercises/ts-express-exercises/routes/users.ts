import { Router, Request, Response } from 'express';

const users = Router();

users.get('/users', (_req: Request, res: Response) => {
  res.status(200).send('Fonfou!');
});

export default users;
