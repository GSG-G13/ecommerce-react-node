const mainPageRouter = require('express').Router();
const homeController = require('../controller/homeController');

mainPageRouter.get('/', homeController);

module.exports = mainPageRouter;
