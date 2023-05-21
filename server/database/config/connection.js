const dotenv = require('dotenv');
dotenv.config();
const { Pool } = require('pg');

const pg = require('pg');

const { DATABASE_URL } = process.env;

const connection = new Pool({
  connectionString: DATABASE_URL,
  ssl: false,
  // ssl: {
  //   rejectUnauthorized: false
  // }
});

connection
  .query('select * from users')
  .then((data) => console.log)
  .catch((err) => console.log(err));

module.exports = connection;
