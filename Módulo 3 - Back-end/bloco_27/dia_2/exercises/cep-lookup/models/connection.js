const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'test',
  password: 'Summer.03',
  database: 'cep_lookup',
});

module.exports = connection;
