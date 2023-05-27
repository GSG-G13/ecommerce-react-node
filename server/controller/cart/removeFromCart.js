/* eslint-disable camelcase */
const removeFromCart = require('../../database/query/cart/removeFromCart');

const deleteCart = (req, res) => {
  const { id } = req.user;
  const { product_id } = req.params;
  const user_id = id;
  removeFromCart({ user_id, product_id })
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'product deleted from cart',
      });
    })
    .catch(() => {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    });
};

module.exports = deleteCart;
