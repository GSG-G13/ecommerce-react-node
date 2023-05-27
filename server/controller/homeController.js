const { verifyToken } = require('../utils');

const homeController = (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({
      success: false,
      message: 'not logged in',
    });
  }
  const decoded = verifyToken(token);

  if (decoded) {
    return res.json({
      success: true,
      message: 'logged in',
      data: {
        username: decoded.username, // always undefined
      },
    });
  }
  return res.json({
    success: false,
    message: 'invalid token',
  });
};

module.exports = homeController;
