const connection = require("../database/config/connection");

const homeController = (req, res) => {
  res.json({
    error: false,
    data: {
      message: "Happy Hacking! 🚀",
    },
  });
};

module.exports = homeController;
