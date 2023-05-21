const { homeController } = require('../controller');

const router = require('express').Router();

router.get('/', homeController);

module.exports = router;
