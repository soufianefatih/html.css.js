const { User } = require("../../models");
const {  userSchema} = require("../../schemas");
const { HttpError, BadRequestError} = require("../../helpers");
const asyncHandler = require('express-async-handler')

const login =  asyncHandler (async (req, res) => {
  const { value, error } =  userSchema.loginSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) BadRequestError(error);

  const { email, password } = value;
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, "Email is wrong");

  if (!user.comparePassword(password)) {
    throw HttpError(401, "Password is wrong");
  }

  const accessToken = user.signToken();

  await User.findOneAndUpdate({ email }, { accessToken });
  res.json({
    accessToken,
    user: {
      name: user.name,
      email: user.email,
    },
  });
 
});

module.exports = login;
