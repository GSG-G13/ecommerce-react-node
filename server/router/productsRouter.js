const { checkAuth } = require('../middlewares');

const productsRouter = require('express').Router();

productsRouter.get('/products',);

productsRouter.post('/products', checkAuth, );





module.exports = productsRouter;