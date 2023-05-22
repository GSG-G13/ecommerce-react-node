const fs = require('fs');
const path = require('path');
const connection = require('./connection');

const sql = fs
  .readFileSync(path.join(__dirname, 'init.sql'), 'utf-8')
  .toString();

connection
  .query(sql)
  .then(() => console.log('build success'))
  .catch((e) => {
    console.error('build failed');
    console.error(e);
  });
