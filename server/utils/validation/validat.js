//const GenericError = require('../customError');

const validate = (schema, data) => schema.validateAsync(data);

module.exports = validate;