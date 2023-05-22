const connection = require("../../config/connection");

const getCartQuery = () => {
  const sql = {
    text: `SELECT name, category, img_url, price FROM 
        products JOIN cart ON cart.product_id = products.id`,
  };
  return connection.query(sql)
};

module.exports = getCartQuery;
