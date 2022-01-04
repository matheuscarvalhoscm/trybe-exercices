const connection = require("./connection");

const validateData = (firstName, lastName, email, password) => {
  if (!firstName || !lastName || !email || !password) return false;
  if (password.length < 6 || typeof password !== 'string') return false;

  return true;
};

const createUser = async (firstName, lastName, email, password) => {
  return connection()
    .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password }))
};




module.exports = {
  validateData,
  createUser,
}

// const create = async (firstName, middleName, lastName) =>
//     connection()
//         .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
//         .then(result => getNewAuthor({ id: result.insertedId, firstName, middleName, lastName }));

// // ...