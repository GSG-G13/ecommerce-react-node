const connection = require('../../config/connection');

const addToCartQuery = ({ product_id, user_id }) => {
  const sql = {
    text: 'INSERT INTO cart (product_id, user_id) VALUES ($1, $2) RETURNING * ',
    values: [product_id, user_id],
  };
  return connection.query(sql);
};

module.exports = addToCartQuery;
