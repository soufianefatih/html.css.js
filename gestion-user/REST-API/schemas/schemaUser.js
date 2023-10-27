const Joi = require("joi");
const { regExp, message } = require("../constants");


const registerSchema= Joi.object({
  name: Joi.string()
  .min(3)
  .max(30)
  .required(true),

  password: Joi.string()
  .required(true)
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  email: Joi.string()
  .required(true)
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  })




  


  
const loginSchema = Joi.object({
  email: Joi.string()
    .pattern(regExp.email)
    .required()
    .messages({
      "any.required": message.fieldRequired("email"),
      "string.pattern.base": message.emailInvalid,
    }),
  password: Joi.string()
    .min(8)
    .max(64)
    .pattern(regExp.password)
    .required()
    .messages({
      "any.required": message.fieldRequired("password"),
      "string.pattern.base": message.passwordInvalid,
    }),
});
  

  const authSchemas = { registerSchema ,loginSchema};

  module.exports = authSchemas;