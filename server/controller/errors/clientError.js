const clientError = (req, res) => {
  res.status(404).json(
    {
      success: false,
      data: {
        message: 'Page not found',
        statusCode: 404,
      },
    },
  );
};

module.exports = clientError;
