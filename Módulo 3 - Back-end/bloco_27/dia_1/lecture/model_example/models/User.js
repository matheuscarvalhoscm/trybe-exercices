const connection = require("./connection");
const { ObjectId } = require('mongodb');

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
        id: _id,
        firstName,
        lastName,
        email,
      }
    })
  ));
}

const getUserById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  return connection()
    .then((db) => db.collection('users').findOne(new ObjectId(id)));
}

module.exports = {
  validateData,
  createUser,
  getAllUsers,
  getUserById,
}
