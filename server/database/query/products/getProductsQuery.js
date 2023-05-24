const connection = require('../../config/connection');

const getProductsQuery = () => {
  const sql = {
    text: 'SELECT * FROM products',
  };
  return connection.query(sql);
};

module.exports = getProductsQuery;
