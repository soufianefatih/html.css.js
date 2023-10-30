const { User } = require("../../models");

const logout = async (req, res) => {
  const { user } = req;
  await User.findOneAndUpdate({ _id: user._id }, { accessToken: "" });
  console.log('message :logout sucess');
  res.status(204).json();
};

module.exports = logout;
