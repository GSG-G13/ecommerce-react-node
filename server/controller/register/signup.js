const bcrypt = require('bcrypt');
const { UserByEmail, signUpQuery } = require('../../database/query');
const { verifyToken, CustomError } = require('../../utils');
const signupSchema = require('../../utils/validation/signupValidation');
const signToken = require('../../utils/jwt/signToken');

const signup = (req, res,next) => {
  const { name, password, confirm_password, email } = req.body;

  signupSchema
    .validateAsync({
      name,
      password,
      confirm_password,
      email,
    })
    .then(() => UserByEmail(email))
    .then((data) => {
      if (data.rowCount) throw new CustomError('Email already exists', 400);
      else return bcrypt.hash(password, 10);
    })
    .then((hashed) =>
      signUpQuery({
        name,
        password: hashed,
        email,
      })
    )
    .then((result) => {
      const payload = result.rows[0];
      const { id } = payload;
      return signToken({ id }, { expiresIn: '1d' });
    })
    .then((token) => {
      res.cookie('token', token, { httpOnly: true, secure: true });
      res.json({ message: 'Account created successfully' });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = signup;
