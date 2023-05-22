const productsRouter = require("express").Router();
const { getProducts } = require("../controller");

productsRouter.get("/products", getProducts);

module.exports = productsRouter;
