const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const generateToken = (payload) => new Promise((res, rej) => {
  jwt.sign(payload, SECRET_KEY, (error, decoded) => {
    if (error) {
      rej(error)
    } else {
      res(decoded)
    }
  })
})

module.exports = generateToken;