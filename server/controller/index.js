const homeController = require("./homeController");
const { signup, logOut, signIn } = require("./register");

module.exports = {
  homeController,
  signup,
  signIn,
  logOut,
};
