const express = require("express");

const Authorized = require("../middleware/isAuthorized");
// const virifylogin= require("../middleware/roleAuthorized");

const UserController = require('./../controller/users/UsersController')


const routerUser = express.Router();


// routerAuth.post("/register", ctrlAuth.register);



routerUser 
    .route('/')
    .get( Authorized.isAuthorized,UserController.all)

routerUser 
    .route('/create')
    .post(UserController.create)

routerUser 
    .route('/update/:id')
    .post(UserController.update)

routerUser 
    .route('/:id')
    .get(UserController.ById)




module.exports = routerUser;
