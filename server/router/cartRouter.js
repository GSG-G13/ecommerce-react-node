const cartRouter = require('express').Router();
const { checkAuth } = require('../middlewares');
const { getCart, addToCart } = require('../controller');
const {
  increaseQuantityController,
  decreaseQuantityController,
} = require('../controller/cart/quantity');

cartRouter.get('/', getCart);
cartRouter.post('/add', addToCart);
cartRouter.post('/increase/:product_id', checkAuth, increaseQuantityController);
cartRouter.post('/decrease/:product_id', checkAuth, decreaseQuantityController);

module.exports = cartRouter;
