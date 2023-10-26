const { ctrlWrapper } = require("../../decorators");

const register = require("./AuthController");

module.exports = {
  register: ctrlWrapper(register),
 
};
