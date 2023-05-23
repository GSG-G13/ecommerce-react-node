/* eslint-disable import/order */
const connection = require('./connection');

module.exports = { connection };

// eslint-disable-next-line import/no-extraneous-dependencies
const fetch = require('node-fetch');
const fs = require('fs');

fetch('https://fakestoreapi.com/products/')
  .then((res) => res.json())
  .then((json) => {
    const data = JSON.stringify(json);
    fs.writeFile('data.json', data, 'utf8', (err) => {
      if (err) {
        console.error('An error occurred while writing to the file:', err);
      } else {
        console.log('Data has been successfully saved to data.json');
      }
    });
  })
  .catch((err) => {
    console.error('An error occurred while fetching or parsing the data:', err);
  });
