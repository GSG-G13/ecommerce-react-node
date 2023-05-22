const cartRouter = require("./cartRouter");
const mainPageRouter = require("./mainPageRouter");
const productsRouter = require("./productsRouter");
const userRouter = require("./userRouter");

const router = require("express").Router();

router.use("/", mainPageRouter);
// router.use("/", productsRouter);
// router.use("/", cartRouter);
router.use("/user", userRouter);

module.exports = router;
