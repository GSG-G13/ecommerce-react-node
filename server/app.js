const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const request = require('request');
const router = require('./router');
const path = require('path');
require('dotenv').config();

const app = express();

const { PORT } = process.env;
app.set('port', PORT || 3000);
app.set('trust proxy', true);
app.disable('x-powered-by');
app.use([
  express.json(),
  express.urlencoded({ extended: false }),
  compression(),
  cookieParser(),
]);

app.use(express.static(path.join(__dirname, '..', 'public', 'build')));
app.use('/api/v1', router);
app.get('/location', (req, res) => {
  const ipAddress = req.ip;
  console.log(ipAddress);
  const apiUrl = `http://ip-api.com/json/${ipAddress}`;

  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const locationData = JSON.parse(body);
      console.log(locationData);
      const location = `${locationData.city}, ${locationData.regionName}, ${locationData.country}`;
      res.send(location);
    } else {
      res.send('Unable to determine your location');
    }
  });
});

module.exports = app;
