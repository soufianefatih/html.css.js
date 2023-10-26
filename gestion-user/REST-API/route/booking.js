const express = require('express')
const router = express.Router()
const BookingController = require('../controller/BookingController');
const AuthMiddleware = require('./../middleware/Authmiddleware');



router
    .route('/create')
    .post(AuthMiddleware.virifylogin,AuthMiddleware.UserRole('client'),BookingController.create)
   
router
    .route('/')
    .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence','client']),BookingController.all) 
   
router
    .route('/all')
    .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole('client'),BookingController.all_booking)    
 
router
    .route('/:id')
    .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence','client']),BookingController.ById) 
    
router
    .route('/onebooking/:booking_id')
    .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence','client']),BookingController.Onebooking)    
       
router
    .route('/update/:id')
    .post(AuthMiddleware.virifylogin,AuthMiddleware.UserRole('client'),BookingController.update)


 router
    .route('/status/:id')
    .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence']),BookingController.confirm)    

module.exports = router;