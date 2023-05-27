require('dotenv').config();
const { Pool } = require('pg');

const {
  NODE_ENV, DATABASE_URL, TEST_URL, DEV_URL,
} = process.env;

let connectionString = '';
let ssl = false;

switch (NODE_ENV) {
  case 'production':
    connectionString = DATABASE_URL;
    ssl = {
      rejectUnauthorized: false,
    };
    break;
  case 'development':
    connectionString = DEV_URL;
    break;
  case 'test':
    connectionString = TEST_URL;
    break;
  default:
    throw new Error('No database is given!!!');
}

const connection = new Pool({
  connectionString,
  ssl,
});

module.exports = connection;
