const { getCartQuery } = require('../../database/query');

const getCart = (req, res) => {
  const { id } = req.user;
  getCartQuery(id)
    .then((data) => {
      res.status(200).json(data.rows);
    })
    .catch((err) => res.status(500).send(err));
};

module.exports = getCart;
