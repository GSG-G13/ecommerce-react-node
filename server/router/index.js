// const { homeController,
// signIn,
// signUp,
// logout,

const cartRouter = require("./cartRouter");
const mainPageRouter = require("./mainPageRouter");
const productsRouter = require("./productsRouter");
const userRouter = require("./userRouter");

//  } = require('../controller');

const router = require("express").Router();

router.use("/", mainPageRouter );
router.use('/', productsRouter);
router.use('/',cartRouter);
router.use('/',userRouter);
//router.get("/logout", logout);

module.exports = router;
