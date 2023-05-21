const { sign } = require('jsonwebtoken');
require('dotenv').config();

const { SECRET_KEY } = process.env;

const signToken = (payload, options) =>
  new Promise((resolve, reject) => {
    sign(payload, SECRET, options, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });

module.exports = signToken;
