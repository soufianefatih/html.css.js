const Joi = require("joi");
const { regExp, message } = require("../constants");
const User = require('../models/user'); // Adjust the path as needed
const {HttpError} = require("../helpers");
const AppError = require("../utils/error")


// Custom validator function to check if the email is unique
// const isUniqueEmail = async (value, helpers, next) => {
//   try {
//     const existingUser = await User.findOne({ email: value });
//     if (existingUser) {
//       const errorMessage = "Email is already in use by another user.";
//       throw HttpError(409, errorMessage);
//     }
//     return value;
//   } catch (error) {
//     console.error("isUniqueEmail error:", error);
//     // You can handle the error here or throw it to be caught in the calling function
//     return Promise.reject(error);
//   }
// };
// Custom validator function to check if the user with _id exists

const isUniqueEmail = async (value, { req }) => {
  try {
    const existingUser = await User.findOne({ email: value });
    if (existingUser && existingUser._id.toString() !== req.body._id) {
      throw new Error(message.emailInvalid);
    }
    return value;
  } catch (error) {
    console.error(error);
    throw new Error(message.emailInvalid); // Reject the promise with an error
  }
};

const isExistingUser = async (value, helpers) => {
  try {
    const existingUser = await User.findById(value);
    if (!existingUser) {
      const errorMessage = "User not found";
      throw HttpError(404, errorMessage);
    }
    return value;
  } catch (error) {
    console.error("isExistingUser error:", error); // You can handle the error here or throw it to be caught in the calling function
   return Promise.reject(error);  }
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
    }).custom(isUniqueEmail),
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

  const userchemas = { registerSchema ,loginSchema,updateSchema, isExistingUser,isUniqueEmail};

  module.exports = userchemas;