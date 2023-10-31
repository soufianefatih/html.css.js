const jwt = require("jsonwebtoken");
const { HttpError } = require("../helpers");
const { User } = require("../models");

const { SECRET_KEY } = process.env;

const isAuthorized = async (req, res, next) => {
  // const { authorization = "" } = req.headers;
  const token = req.header("auth-token");

  // const [bearer, token] = authorization.split(" ");
  if (!token) {
    // next(HttpError(401));
    res.status(401).send({ success: false,message: "Acess Denied"});
  }
  try {
    const isValidToken = jwt.verify(token, SECRET_KEY);

    const user = await User.findOne({ _id: isValidToken.id });
    if (!user)
      // throw HttpError(401);
      res.json({ success: false, message: "Failed to authenticate token " });


    req.user = user;
    next();
  } catch (error) {
    if (
      error.message === "invalid signature" ||
      error.message === "jwt expired" ||
      error.message === "jwt must be provided"
    ) {
      // error.status = 401;
      // error.message = "Unauthorized";
        res.status(401).send({message: error.message});
    }
    next();
  }
 
};

module.exports = isAuthorized;
  // res.status(401).send({message: error});