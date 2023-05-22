const bcrypt = require('bcrypt');
const {UserByEmail, signupQuery } = require('../../database/query');
const { verifyToken, CustomError } = require('../../utils');
const { validate, signupSchema } = require('../../utils');

const signup = (req, res) => {
  const {
    username, password, confirm_password, email,
  } = req.body;

  validate(signupSchema, {
    username,
    password,
    confirm_password,
    email,
  })
    .then(() =>UserByEmail(email))
    .then((data) => {
      if (data.rowCount) throw new CustomError('Email already exists', 400);
      else return bcrypt.hash(password, 10);
    })
    .then((hashed) => signupQuery({
      username,
      password: hashed,
      email,
    }))
    .then((result) => {
      const payload = result.rows[0];
      return verifyToken({ userID: payload.id });
    })
    .then((jwt) => { res.cookie('token', jwt, { httpOnly: true, secure: true }); res.json({ message: 'Account created successfully' }); })
 
};

module.exports = signup;