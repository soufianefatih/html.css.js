const { User } = require("../../models");
const {  userSchema} = require("../../schemas");
const { HttpError, BadRequestError} = require("../../helpers");
const asyncHandler = require('express-async-handler')

const login =  asyncHandler (async (req, res) => {
  const { value, error } =  userSchema.loginSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) BadRequestError(error);

 
});

module.exports = login;
