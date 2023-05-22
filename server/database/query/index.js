const { getCartQuery, addToCartQuery } = require("./cart");
const { getProductsQuery } = require("./products");
const { signInQuery, signUpQuery, UserByEmail } = require("./register");

module.exports = {
  UserByEmail,
  signInQuery,
  signUpQuery,
  getProductsQuery,
  getCartQuery,
  addToCartQuery,
};
