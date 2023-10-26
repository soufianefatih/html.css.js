const express = require('express')
const router = express.Router()
const ReviewController = require('../controller/ReviewController');
const AuthMiddleware = require('./../middleware/Authmiddleware');


router
    .route('/create')
    .post(AuthMiddleware.virifylogin,AuthMiddleware.UserRole('client'),ReviewController.create)


 router
    .route('/')
    .get(ReviewController.all)
    

router
    .route('/')
    .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence','client']),ReviewController.ById)   


 router
    .route('/all')
    .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole('client'),ReviewController.all_review)


router
    .route('/status/:id')
    .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence']),ReviewController.confirm) 


 router
    .route('/statusconfirmed')
    .get(ReviewController.reviewconfirmed) 
    
router
    .route('/update/:id')
    .post(AuthMiddleware.virifylogin,AuthMiddleware.UserRole('client'),ReviewController.update)

 router
    .route('/delete/:id')
    .delete(AuthMiddleware.virifylogin,AuthMiddleware.UserRole('client'),ReviewController.delete)

    module.exports = router;