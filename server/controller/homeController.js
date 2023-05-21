const connection = require("../database/config/connection");

const homeController = (req, res) => {

  connection.query('select * from users')
    .then((data) => console.log(data.rows))
    .catch((err) => console.log(err));
  res.json({
    error: false,
    data: {
      message: 'Happy Hacking! 🚀',
    }
  });
};

module.exports = homeController;
