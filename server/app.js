const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
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
  cookieParser(),
]);

app.use('/api/v1', router);

module.exports = app;
