const express = require("express");
const {isAuthorized , virifylogin} = require("../middleware");
const UserController = require('../controller/users/UsersController')
const { ctrlWrapper } = require("../decorators");


const routerUser = express.Router();





routerUser 
    .route('/')
    .get( virifylogin,ctrlWrapper,UserController.all)

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
