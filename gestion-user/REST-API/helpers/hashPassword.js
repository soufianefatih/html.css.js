const bcrypt = require("bcrypt");

// const hashPassword = async function (next) {
//   const salt = await bcrypt.genSalt();
//   const hash = bcrypt.hashSync(this.password, salt);
//   this.password = hash;
//   next();
// };

// const hashedPassword = async function (password) {
//   const salt = await bcrypt.genSalt();
//   const hashedPassword = bcrypt.hashSync(password, salt);
//   return hashedPassword;
// };

// module.exports = { hashPassword, hashedPassword };

const hashPassword = async function (next) {
  try {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
  } catch (error) {
    next(error);
  }
};

const hashedPassword = async function (password) {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

module.exports = { hashPassword, hashedPassword };
