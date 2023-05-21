const GenericError = require('../helpers/customError');

const validate = (schema, data) => schema.validateAsync(data);

module.exports = validate;