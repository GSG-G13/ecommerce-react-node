const homeController = require("./homeController");
const logout = require("./register/logout");
const signIn = require("./register/signin");
const signUp = require("./register/signup");

module.exports = {
  homeController,
  signUp ,
  signIn,
  logout,
};