const cartRouter = require('express').Router();
const { getCart, addToCart } = require('../controller');
const {
  increaseQuantityController,
  decreaseQuantityController,
} = require('../controller/cart/quantity');
const deleteCart = require('../controller/cart/removeFromCart');

cartRouter.get('/', getCart);
cartRouter.post('/add', addToCart);
cartRouter.post('/increase/:product_id', increaseQuantityController);
cartRouter.post('/decrease/:product_id', decreaseQuantityController);
cartRouter.post('/delete/:product_id', deleteCart);

module.exports = cartRouter;
