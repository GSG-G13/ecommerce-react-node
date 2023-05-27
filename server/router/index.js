const router = require('express').Router();
const { checkAuth } = require('../middlewares');
const cartRouter = require('./cartRouter');
const mainPageRouter = require('./mainPageRouter');
const productsRouter = require('./productsRouter');
const userRouter = require('./userRouter');

router.use('/', mainPageRouter);
router.use('/products', productsRouter);
router.use('/cart', checkAuth, cartRouter);
router.use('/user', userRouter);

module.exports = router;
