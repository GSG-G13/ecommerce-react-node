const connection = require('../../config/connection');

const signUpQuery = ({ name, email, password }) => connection.query(
  'INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING id',
  [name, email, password],
);

module.exports = signUpQuery;
