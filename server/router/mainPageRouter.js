const homeController = require("../controller/homeController");

const mainPageRouter = require("express").Router();

mainPageRouter.get("/", homeController);

module.exports = mainPageRouter;
