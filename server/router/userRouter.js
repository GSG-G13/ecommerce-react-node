const userRouter = require('express').Router();
const { logOut, signIn, signup } = require('../controller');

userRouter.post('/signin', signIn);
userRouter.post('/signup', signup);
userRouter.get('/logout', logOut);

module.exports = userRouter;
