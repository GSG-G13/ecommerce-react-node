const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pg = require('pg');

const { DATABASE_URL } = process.env;


console.log(DATABASE_URL);

const connection = new Pool({
  connectionString: DATABASE_URL,
  ssl: false,
  // ssl: {
  //   rejectUnauthorized: false
  // }

});

module.exports = connection;