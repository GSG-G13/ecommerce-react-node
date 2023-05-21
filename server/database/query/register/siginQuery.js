const connection = require('../../config/connection');
const signInQuery = (email) => connection.query('SELECT * from users;', [email]);

module.exports = signInQuery;

