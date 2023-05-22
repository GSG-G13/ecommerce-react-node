const joi = require('joi');

const signupSchema = joi.object({
  name: joi.string().min(3).max(30).required(),
  email: joi
    .string()
    .min(8)
    .max(100)
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: joi.string().pattern(new RegExp('[a-zA-Z0-9]{6,30}$')).required(),
  confirm_password: joi.ref('password'),
});

module.exports = signupSchema;
