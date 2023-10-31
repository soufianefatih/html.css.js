const Joi = require("joi");
const { regExp, message } = require("../constants");


const registerSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(32)
    .pattern(regExp.name)
    .required()
    .messages({
      "any.required": message.fieldRequired("name"),
      "string.pattern.base": message.nameInvalid,
    }),
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
    role: Joi.string()

});

  
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
  
const updateSchema = Joi.object({
  _id: Joi.string(),
  name: Joi.string().min(2).max(32).pattern(regExp.name).messages({
    "string.pattern.base": message.nameInvalid,
  }),
  email: Joi.string().pattern(regExp.email).messages({
    "string.pattern.base": message.emailInvalid,
  }),
  password: Joi.string().min(8).max(64).pattern(regExp.password).allow(null).messages({
    "string.pattern.base": message.passwordInvalid,
  }),
  role: Joi.string().min(0).max(64).messages()
});

  const userchemas = { registerSchema ,loginSchema,updateSchema};

  module.exports = userchemas;