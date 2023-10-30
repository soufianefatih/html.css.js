const express = require("express");

// const { isAuthorized} = require("../../middlewares");

const UserController = require('./../controller/users/UsersController')


const routerUser = express.Router();


// routerAuth.post("/register", ctrlAuth.register);



routerUser 
    .route('/')
    .get(UserController.all)

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
