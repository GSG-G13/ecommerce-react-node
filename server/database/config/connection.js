const dotenv = require('dotenv');

dotenv.config();
const { Pool } = require('pg');

const { DATABASE_URL } = process.env;

const connection = new Pool({
  connectionString: DATABASE_URL,
  ssl: true,
  // ssl: {
  //   rejectUnauthorized: false
  // }
});

module.exports = connection;
