/* eslint-disable camelcase */
const { addToCartQuery } = require('../../database/query');

const addToCart = (req, res) => {
  const { product_id } = req.body;
  const { id } = req.user;
  addToCartQuery({ product_id, user_id: id })
    .then(({ rows }) => {
      res.status(200).json({
        msg: 'product added to cart',
        data: rows,
      });
    })
    .catch(() => {
      res.status(500).json({
        msg: 'internal server error',
      });
    });
};

module.exports = addToCart;
