const express = require("express");
const {virifylogin} = require("../middleware");
const UserController = require('../controller/users/UsersController')


const routerUser = express.Router();





routerUser 

    .get("/",virifylogin,UserController.all)

routerUser 
    .route('/create')
    .post(virifylogin,UserController.create)

routerUser 
    .post("/update",virifylogin,UserController.update)

// routerUser 
//     .route('/:id')
//     .get(UserController.ById)




module.exports = routerUser;
