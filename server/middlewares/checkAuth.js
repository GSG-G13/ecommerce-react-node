const { customError, verifyToken } = require('../utils');

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    // eslint-disable-next-line new-cap
    throw new customError('Unauthorized', 401);
  }
  verifyToken(token)
    .then((decoded) => {
      req.user = decoded;
      next();
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = checkAuth;
