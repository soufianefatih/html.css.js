const express = require("express");
const {isAuthorized , virifylogin} = require("../middleware");
const UserController = require('../controller/users/UsersController')


const routerUser = express.Router();





routerUser 
    .route('/')
    .get(virifylogin,UserController.all)

routerUser 
    .route('/create')
    .post(virifylogin,UserController.create)

routerUser 
    .route('/update/:id')
    .post(UserController.update)

routerUser 
    .route('/:id')
    .get(UserController.ById)




module.exports = routerUser;
