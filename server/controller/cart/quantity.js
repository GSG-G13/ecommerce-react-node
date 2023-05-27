/* eslint-disable camelcase */
const increaseQuantity = require('../../database/query/cart/increaseQuantity');
const decreaseQuantity = require('../../database/query/cart/decreaseQuantity');

const increaseQuantityController = (req, res) => {
  const { product_id } = req.params;
  const { id } = req.user;
  const user_id = id;
  console.log('user_idddddd', user_id);
  increaseQuantity({ product_id, user_id })
    .then(({ rows }) => {
      console.log(rows);
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
  const { id } = req.user;
  const user_id = +id;
  console.log('user_idddddd', user_id);

  decreaseQuantity({ product_id, user_id })
    .then(({ rows }) => {
      console.log(rows);
      res.status(200).json({
        status: 'success',
        data: rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error',
        err,
      });
    });
};

module.exports = { increaseQuantityController, decreaseQuantityController };
