const connection = require('../../config/connection');

const getCartQuery = (id) => {
  const sql = {
    text: `select products.name from cart join
    products ON products.id = cart.product_id 
    where cart.user_id = $1`,
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getCartQuery;
