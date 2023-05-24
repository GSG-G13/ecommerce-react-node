const logOut = (req, res) => {
  res.clearCookie('token').json({
    status: 200,
    msg: 'logged out',
  });
  res.redirect('/');
};

module.exports = logOut;
