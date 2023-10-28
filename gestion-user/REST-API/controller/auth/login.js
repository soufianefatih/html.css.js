const { User } = require("../../models");
const { authSchema } = require("../../schemas");
const { HttpError, BadRequestError} = require("../../helpers");
const asyncHandler = require('express-async-handler')

const login =  asyncHandler (async (req, res) => {
  const { value, error } = authSchema.loginSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) BadRequestError(error);

  const { email, password } = value;
  const user = await User.findOne({ email });
  // if (!user) throw errorHandler(401, "Email is wrong");
  if (!user) res.json(401,{message:'Email is wrong'})

  if (!user.comparePassword(password)) {
    // throw HttpError(401, "Password is wrong");
    res.json(401,{message:'Password is wrong'})
  }

  const accessToken = user.signToken();

  await User.findOneAndUpdate({ email }, { accessToken });
  res.json({
    accessToken,
    user: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

module.exports = login;
