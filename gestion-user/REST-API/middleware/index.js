const userRole = require("./roleAuthorized");
const isAuthorized = require("./isAuthorized");
const virifylogin = require("./virifyLogin")

module.exports = {
  isAuthorized,
  userRole,
  virifylogin
};
