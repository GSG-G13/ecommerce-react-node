/* eslint-disable camelcase */
const connection = require('../../config/connection');

const removeFromCart = ({ user_id, product_id }) => {
  const sql = {
    text: 'delete from cart where user_id = $1 and product_id = $2',
    values: [user_id, product_id],
  };
  return connection.query(sql);
};
module.exports = removeFromCart;
