const { ctrlWrapper } = require("../../decorators");

const register = require("./register");
const login = require("./login");
const logout = require("./logout");



module.exports = {
  register,
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout)
 
};
