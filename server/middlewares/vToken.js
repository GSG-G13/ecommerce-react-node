const { verify } = require("jsonwebtoken");
const { SECRET_KEY } = process.env;


const verifyToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(400).json('unauthenticated')
  } else {
    verify(token, SECRET_KEY, (err, decoded) => {
      if (err) { res.status(302).json({ message: 'Token not found' }) }
      else {
        req.token = decoded;
        next();
      }
    })
  }
};

module.exports = verifyToken;