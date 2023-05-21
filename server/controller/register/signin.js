const bcrypt = require('bcrypt');
const e = require('express');
const { signInQuery } = require("../../database/query");
const generateToken = require('../../utils/jwt/verifyToken');
const GenericError = require('../../utils/customError');
const signInSchema = require("../../utils/validation/loginValidation");
const validate = require("../../utils/validation/validat");

const signIn = (req, res) => {

    
  const { email, password } = req.body;
  let user;
  validate(signInSchema, { email, password })
    .then(() => signInQuery(email))
    .then((details) => {
        console.log(details);
      user = details.rows[0];

      if (!user) {
        throw new GenericError(400, 'Please check your password and email')
      }

      return bcrypt.compare(password, user.hashed)

    }).then((isPasswordMatched) => {
      if (!isPasswordMatched) {
        throw new GenericError(400, 'Please check your password and email');
      } else {
        return generateToken({ id: user.id });
      }
    }).then((jwt) => {
        console.log(jwt);
      res.cookie('token', jwt, { httpOnly: true }).json({ message: 'Logged in successfully!', success: true})
    }).catch(err => {
        console.log(err);
        res.json({ err: err })
    })
};

module.exports = signIn;