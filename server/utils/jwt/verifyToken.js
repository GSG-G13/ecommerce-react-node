const { verify } = require("jsonwebtoken");
require("dotenv").config();

const { SECRE } = process.env;

const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    verify(token, SECRE, (err, decoded) => {
      if (err) {
        reject(err);
      }
      resolve(decoded);
    });
  });

module.exports = verifyToken;
