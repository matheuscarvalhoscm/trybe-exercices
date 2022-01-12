const jwt = require('jsonwebtoken');

const SECRET = 'ouija123';

const CONFIG = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToke = (data) => {
  return jwt.sign({ data }, SECRET, CONFIG);
};

module.exports = {
  generateToke,
};
