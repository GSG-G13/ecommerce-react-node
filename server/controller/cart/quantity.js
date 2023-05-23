/* eslint-disable camelcase */
const increaseQuantity = require('../../database/query/cart/increaseQuantity');
const decreaseQuantity = require('../../database/query/cart/decreaseQuantity');

const increaseQuantityController = (req, res) => {
  const { product_id } = req.params;
  const { user_id } = req.user;
  increaseQuantity({ product_id, user_id })
    .then(({ rows }) => {
      res.status(200).json({
        status: 'success',
        data: rows,
      });
    })
    .catch(() => {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    });
};

const decreaseQuantityController = (req, res) => {
  const { product_id } = req.params;
  const { user_id } = req.user;
  decreaseQuantity({ product_id, user_id })
    .then(({ rows }) => {
      res.status(200).json({
        status: 'success',
        data: rows,
      });
    })
    .catch(() => {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    });
};

module.exports = { increaseQuantityController, decreaseQuantityController };
