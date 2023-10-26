const express = require('express')
const router = express.Router()
const UserController = require('../controller/UserController');
const AuthMiddleware = require('../middleware/Authmiddleware');



router
    .route('/create')
    .post(AuthMiddleware.virifylogin,AuthMiddleware.UserRole('admin'),UserController.create) 


 router
    .route('/')
    .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole('admin'),UserController.all)

    router
    .route('/agence')
    .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole('admin'),UserController.agence)

 router
    .route('/:id')
    .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','client']),UserController.ById)     

  
 router
    .route('/delete/:id')
    .delete(AuthMiddleware.virifylogin,AuthMiddleware.UserRole('admin'),UserController.delete)


 router
    .route('/status/:id')
    .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole('admin'),UserController.status_agence)       


    module.exports = router;