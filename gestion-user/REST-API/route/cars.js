const express = require('express')
const router = express.Router()
const CarsController = require('../controller/CarsController');
const AuthMiddleware = require('./../middleware/Authmiddleware');
const multer = require('multer')
const upload = multer();

router
    .route('/create')
    .post(upload.fields([{ name: 'image', maxCount: 1}]),AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence']),CarsController.create)

 router
    .route('/update/:id')
    .post(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence']),CarsController.update)    

router
    .route('/')
    .get(CarsController.all)  

 router
    .route('/all')
    .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence']),CarsController.all_cars)  
    
router
    .route('/:id')
    .get(CarsController.ById)    
  
router
    .route('/delete/:id')
    .delete(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence']),CarsController.delete)    


    module.exports = router;