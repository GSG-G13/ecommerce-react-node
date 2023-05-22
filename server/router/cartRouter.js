const cartRouter = require('express').Router();
const { checkAuth } = require('../middlewares');
const { getCart, addToCart } = require('../controller');

cartRouter.get('/', checkAuth, getCart);

cartRouter.post('/add', checkAuth, addToCart);

module.exports = cartRouter;
