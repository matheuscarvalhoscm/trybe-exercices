const connection = require('./connection');

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
  fullName: getFullNameAuthor(authorData.first_name, authorData.middle_name, authorData.last_name),
});

const isValid = (first_name, last_name) => {
  if (!first_name || typeof first_name !== 'string') return false;
  if (!last_name || typeof last_name !== 'string') return false;

  return true;
};

const checkAuthorId = async (id) => {
  const [authorId] = await connection.execute(
    'SELECT id FROM model_example.authors WHERE id=?',
    [id]
  );

  return authorId;
}

const getFullNameAuthor = (first_name, middle_name, last_name) => {
  const fullName = [first_name, middle_name, last_name]
    .filter(Boolean)
    .join(' ');  

  return fullName;
};


const getAllAuthors = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
  );
  
  return authors.map(serialize);
};

const getAuthorById = async (id) => {
  const [author] = await connection.execute(
    'SELECT * FROM model_example.authors WHERE id=?', [id]
  );

  if (author.length === 0) return null;

  return author.map(serialize);
};

const createAuthor = async (firstName, middleName, lastName) => {
  connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName]
  );
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  isValid,
  createAuthor,
  checkAuthorId,
}
