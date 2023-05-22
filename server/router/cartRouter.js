const cartRouter = require("express").Router();
const { checkAuth } = require("../middlewares");
const { getCart, addToCart } = require("../controller");

cartRouter.get("/cart", checkAuth, getCart);

cartRouter.post("/cart", checkAuth, addToCart);

module.exports = cartRouter;
