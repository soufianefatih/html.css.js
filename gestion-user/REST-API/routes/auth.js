const express = require("express");

const { ctrlAuth} = require("../controller");
// const { isAuthorized, upload } = require("../../middlewares");

const routerAuth = express.Router();

routerAuth.post("/register", ctrlAuth.register);
routerAuth.post("/login", ctrlAuth.login);
routerAuth.post("/logout", ctrlAuth.logout);




module.exports = routerAuth;
