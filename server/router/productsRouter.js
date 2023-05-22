const productsRouter = require('express').Router();
const { getProducts } = require('../controller');

productsRouter.get('/', getProducts);

module.exports = productsRouter;
