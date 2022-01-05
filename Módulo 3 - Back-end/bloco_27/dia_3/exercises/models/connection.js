const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost', // Se necessário, substitua pelo seu host, `localhost` é o comum
  user: 'test', // Se necessário, substitua pelo seu usuário para conectar ao banco na sua máquina
  password: 'Summer.03', // Se necessário, substitua pela sua senha para conectar ao banco na sua máquina
  database: 'rest_exercicios'});

module.exports = connection;
