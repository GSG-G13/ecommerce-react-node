const { logOut, signIn, signup } = require("../controller");
const userRouter = require("express").Router();

userRouter.post("/signin", signIn);
userRouter.post("signup", signup);
userRouter.get("/logout", logOut);

module.exports = userRouter;
