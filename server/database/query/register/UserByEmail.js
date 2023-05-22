const connection = require('../../config/connection');

const UserByEmail = (email) =>
  connection.query('SELECT * FROM users WHERE email = $1', [email]);

module.exports = UserByEmail;
