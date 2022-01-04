const connection = require('./connection');
const { ObjectId } = require('mongodb');

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

const getFullNameAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [id, firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');  
    
  return {
    id,
    firstName,
    middleName,
    lastName
  };
};


// // USING MySQL
// const getAllAuthors = async () => {
//   const [authors] = await connection.execute(
//     'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
//   );
  
//   return authors.map(serialize);
// };

// // USING MongoDB
const getAllAuthors = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
      .then((authors) =>
        authors.map(({ _id, firstName, middleName, lastName }) =>
        getFullNameAuthor({
          id: _id,
          firstName,
          middleName,
          lastName,
      })
    )
  );
};

// // USING MySQL:
// const getAuthorById = async (id) => {
//   const [author] = await connection.execute(
//     'SELECT * FROM model_example.authors WHERE id=?', [id]
//   );

//   if (author.length === 0) return null;

//   return author.map(serialize);
// };

// // USING MongoDB:
const getAuthorById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(new ObjectId(id)))

    if (!authorData) return null;

    const { firstName, middleName, lastName } = authorData;

    return getFullNameAuthor({ id, firstName, middleName, lastName })
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
