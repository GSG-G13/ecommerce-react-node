const connection = require("./connection");
const fs = require("fs");
const path = require("path");

const sql = fs.readFileSync(path.join(__dirname, "init.sql"), 'utf-8').toString();

connection.query(sql, (err, res) => {
  if (err) throw err;
  console.log("Table created with result: ", res);
});