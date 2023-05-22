const { getProductsQuery } = require('../../database/query');

const getProducts = (req, res) => {
  getProductsQuery()
    .then((data) => {
      res.status(200).json(data.rows);
    })
    .catch((err) => res.status(500).send(err));
};

module.exports = getProducts;
