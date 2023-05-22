const bcrypt = require("bcrypt");
const { signInQuery } = require("../../database/query");
const GenericError = require("../../utils/customError");
const signInSchema = require("../../utils/validation/loginValidation");
const signToken = require("../../utils/jwt/signToken");

const signIn = (req, res, next) => {
  const { email, password } = req.body;
  signInSchema
    .validateAsync({ email, password })
    .then(() => signInQuery(email))
    .then((details) => {
      req.user = details.rows[0];

      if (!details.rowCount) {
        throw new GenericError(400, "Please check your password and email");
      }
      const { hashed } = req.user;
      return bcrypt.compare(password, hashed);
    })
    .then((isPasswordMatched) => {
      if (!isPasswordMatched) {
        throw new GenericError(400, "Please check your password and email");
      } else {
        const { id } = req.user;
        return signToken({ id: id }, { expiresIn: "1d" });
      }
    })
    .then((token) => {
      res
        .cookie("token", token, { httpOnly: true })
        .json({ message: "Logged in successfully!", success: true });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = signIn;
