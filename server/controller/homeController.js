
const homeController = (req, res) => {
  res.json({
    error: false,
    data: {
      message: 'Happy Hacking! 🚀',
    }
  });
};

module.exports = homeController;
