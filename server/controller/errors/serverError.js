const { JsonWebTokenError } = require('jsonwebtoken');
const CustomError = require('../../utils/customError');

// eslint-disable-next-line no-unused-vars, consistent-return
const serverError = (err, req, res, next) => {
  if (err.isJoi) {
    return res.status(400).json(
      {
        success: false,
        data: {
          message: err.details,
          statusCode: 400,
        },
      },
    );
  } if (err instanceof CustomError) {
    return res.status(err.statusCode).json(
      {
        success: false,
        data: {
          message: err.message,
          statusCode: err.statusCode,
          From: 'custom',
        },
      },
    );
  } if (err instanceof JsonWebTokenError) {
    return res.status(401).json(
      {
        success: false,
        data: {
          message: 'Un Authorized',
          statusCode: 401,
          From: 'jwt',
        },
      },
    );
  } res.status(500).json(
    {
      success: false,
      data: {
        message: 'Internal server error',
        error: err.message,
        statusCode: 500,
      },
    },
  );
};

module.exports = serverError;
