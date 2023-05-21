const { homeController,
signIn,
signUp,
logout,

 } = require('../controller');

const router = require('express').Router();

router.get('/', homeController);
//router.post("/signup", signUp);
router.post("/signin", signIn);
//router.get("/logout", logout);


module.exports = router;
