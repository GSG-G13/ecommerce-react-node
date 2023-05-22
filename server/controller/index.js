const { getCart, addToCart } = require('./cart');
const homeController = require('./homeController');
const { getProducts } = require('./products');
const { signup, logOut, signIn } = require('./register');

module.exports = {
  homeController,
  signup,
  signIn,
  logOut,
  getProducts,
  getCart,
  addToCart,
};
