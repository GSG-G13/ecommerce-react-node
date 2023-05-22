const logOut = (req, res) => {
  res.clearCookie('token').json({
    status: 200,
    msg: 'logged out',
  });
};

module.exports = logOut;
