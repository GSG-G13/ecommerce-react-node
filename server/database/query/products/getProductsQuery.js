const connection = require('../../config/connection');

const getProductsQuery = () => {
  const sql = {
    text: 'SELECT name, category, description, price, img_url FROM products',
  };
  return connection.query(sql);
};

module.exports = getProductsQuery;
