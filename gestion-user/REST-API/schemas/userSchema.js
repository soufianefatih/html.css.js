const Joi = require("joi");
const { regExp, message } = require("../constants");
const User = require('../models/user'); // Adjust the path as needed
const { HttpError, BadRequestError} = require("../helpers");


// Custom validator function to check if the email is unique
const isUniqueEmail = async (value, helpers) => {
  try {
    const existingUser = await User.findOne({ email: value });
    if (existingUser) {
      return  HttpError('Email already exists');
    }
    return value;
  } catch (error) {
    console.error(error);
    throw new Error('Database error');
  }
};


// Custom validator function to check if the user with _id exists

const isExistingUser = async (value, helpers) => {
  try {
    const existingUser = await User.findById(value);
    if (!existingUser) {
      throw { message: 'User not found', type: 'any.invalid' };
    }
    return value;
  } catch (error) {
    console.error(error);
    // Return a rejected promise with the error to ensure proper handling
    return Promise.reject(error);
  }
};


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
  _id: Joi.string().custom(isExistingUser),
  name: Joi.string().min(2).max(32).pattern(regExp.name).messages({
    "string.pattern.base": message.nameInvalid,
  }),
  email: Joi.string().pattern(regExp.email).messages({
    "string.pattern.base": message.emailInvalid,
  }).custom(isUniqueEmail),
  password: Joi.string().min(8).max(64).pattern(regExp.password).allow(null).messages({
    "string.pattern.base": message.passwordInvalid,
  }),
  role: Joi.string().min(0).max(64).messages()
});

  const userchemas = { registerSchema ,loginSchema,updateSchema, isExistingUser};

  module.exports = userchemas;