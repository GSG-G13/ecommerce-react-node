/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const jsonData = fs.readFileSync(path.join(__dirname, 'seed.json'), 'utf-8');
const products = JSON.parse(jsonData);

const connection = require('./connection');

async function insertData() {
  try {
    for (const product of products) {
      const query = `
        INSERT INTO products (name, price, description, category, image)
        VALUES ($1, $2, $3, $4, $5)
      `;
      const values = [
        product.name,
        product.price,
        product.description,
        product.category,
        product.image,
      ];

      // eslint-disable-next-line no-await-in-loop
      await connection.query(query, values);
      console.log(`Inserted product ${product.name}`);
    }
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

insertData();
