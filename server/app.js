const express = require('express');
const compression = require('compression');
const router = require('./router');
require('dotenv').config();

const app = express();

const { PORT } = process.env;
app.set('port', PORT || 3000);

app.disable('x-powered-by');
app.use([
  express.json(),
  express.urlencoded({ extended: false }),
  compression(),
]);

app.use('/', router);

module.exports = app;
