const { getCartQuery } = require('../../database/query');

const getCart = (req, res) => {
  const { id } = req.user;
  getCartQuery(id)
    .then((data) => {
      const dataWithTotal = data.rows.map((item) => {
        const totalPrice = item.price * item.quantity;
        return { ...item, totalPrice };
      });
      const total = dataWithTotal.reduce(
        (acc, item) => acc + item.totalPrice,
        0,
      );
      res.status(200).json({ dataWithTotal, total });
    })
    .catch((err) => res.status(500).send(err));
};

module.exports = getCart;
