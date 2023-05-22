const fs = require('fs');
const path = require('path');
const connection = require('./connection');

const sql = fs
  .readFileSync(path.join(__dirname, 'seeder.sql'), 'utf-8')
  .toString();

connection
  .query(sql)
  .then(() => console.log('seed success'))
  .catch((e) => {
    console.error('seed failed');
    console.error(e);
  });
