const { verify } = require('jsonwebtoken');
require('dotenv').config();

const { SECRET_KEY } = process.env;

const verifyToken = (token) => new Promise((resolve, reject) => {
  verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      reject(err);
    }
    resolve(decoded);
  });
});

module.exports = verifyToken;
