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

const getAllUsers = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray()
    .then((users) => users.map(({ _id, firstName, lastName, email }) => {
      return {
        _id,
        firstName,
        lastName,
        email,
      }
    })
  ));
}

module.exports = {
  validateData,
  createUser,
  getAllUsers,
}
