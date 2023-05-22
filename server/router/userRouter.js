const signIn = require('../controller/register/signin');

const userRouter = require('express').Router();

userRouter.post('/signin',signIn);
// userRouter.post('signup', signUp);
// userRouter.get('/logout',logOut );


module.exports = userRouter;