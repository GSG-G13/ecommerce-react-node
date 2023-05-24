const connection = require('../../config/connection');

const getProductQuantity = (id) => {
  const sql = {
    text: 'select quantity from cart where product_id = $1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getProductQuantity;
