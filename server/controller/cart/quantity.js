/* eslint-disable camelcase */
const increaseQuantity = require('../../database/query/cart/increaseQuantity');
const decreaseQuantity = require('../../database/query/cart/decreaseQuantity');
const getProductQuantity = require('../../database/query/cart/getQuantity');

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
  getProductQuantity(product_id)
    .then(({ rows }) => {
      if (rows[0].quantity === 1) {
        return res.status(200).json({
          status: 'success',
          data: rows,
          message: 'quantity is 1 cannot decrease more',
        });
      }
      return decreaseQuantity({ product_id, user_id });
    })
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
