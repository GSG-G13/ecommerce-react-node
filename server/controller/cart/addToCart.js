const { addToCartQuery } = require("../../database/query");

const addToCart = (req, res) => {
  addToCartQuery();
};

module.exports = addToCart;
