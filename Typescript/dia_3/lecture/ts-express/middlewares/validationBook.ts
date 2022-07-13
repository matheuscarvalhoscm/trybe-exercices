import { NextFunction, Request, Response } from 'express';
import StatusCode from '../utils/dictionary';
import Book from '../interfaces/Book';

const properties = [
  'type',
  'name',
  'price',
  'image',
  'author',
  'publishingCompany',
  'isbn'
];

const validateProperties = (book: Book): [boolean, string | null] => {
  let response: [boolean, string | null] = [true, null];
  
  properties.forEach((property) => {
    if(!Object.prototype.hasOwnProperty.call(book, property)) response = [false, property];
  });
  
  return response;
};

const validateValues = (book: Book): [boolean, string | null] => {
  const entries = Object.entries(book);
  let response: [boolean, string | null] = [true, null];

  entries.forEach((entry) => {
    const [property, value] = entry
    if (!value) response = [false, property];
  });

  return response;
};

const validateBook = (req: Request, res: Response, next: NextFunction) => {
  const book: Book = req.body;
  let [valid, property] = validateProperties(book);

  if (!valid) {
    return res
      .status(StatusCode.BAD_REQUEST)
      .send(`O campo ${property} é obrigatório`);
  }

  [valid, property] = validateValues(book);

  if (!valid) {
    return res
      .status(StatusCode.BAD_REQUEST)
      .send(`O campo ${property} não pode ser nulo ou vazio`);
  }
  
  next();

};

export default validateBook;
