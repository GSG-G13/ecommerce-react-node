const { homeController,
    signUp,
    signIn,
    logout,

 } = require('../controller');

const router = require('express').Router();
router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/logout", logout);

router.get('/', homeController);

module.exports = router;
