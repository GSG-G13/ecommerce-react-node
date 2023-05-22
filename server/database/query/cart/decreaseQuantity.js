/* eslint-disable camelcase */
const connection = require('../../config/connection');

const decreaseQuantity = ({ product_id, user_id }) => {
  const sql = {
    text: 'UPDATE cart SET quantity = quantity - 1 WHERE product_id = $1 AND user_id = $2 RETURNING *',
    values: [product_id, user_id],
  };

  return connection.query(sql);
};

module.exports = decreaseQuantity;
