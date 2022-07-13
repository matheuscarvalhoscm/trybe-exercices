import fs from 'fs/promises';
import Book from '../interfaces/Book';

export const read = async (): Promise<Book[]> => {
  const data = await fs.readFile('./seed.json', 'utf-8');
  const books: Book[] = JSON.parse(data);
  return books;
}

export const write = async (info: Book[]): Promise<void> => {
  await fs.writeFile('./seed.json', JSON.stringify(info));
}

export default read;
