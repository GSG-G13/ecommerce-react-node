const { sign } = require("jsonwebtoken");
require("dotenv").config();

const { SECRE } = process.env;

const signToken = (payload, options) =>
  new Promise((resolve, reject) => {
    sign(payload, SECRE, options, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });

module.exports = signToken;
