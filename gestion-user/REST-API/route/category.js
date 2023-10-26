const express = require('express')
const router = express.Router()
const CategoryController = require('../controller/CategoryController');
const AuthMiddleware = require('./../middleware/Authmiddleware');
const multer = require('multer')
const upload = multer();

router
    .route('/create')
    .post(upload.fields([{ name: 'image', maxCount: 1}]),AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence']),CategoryController.create)

 router
    .route('/update/:id')
    .post(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence']),CategoryController.update)    

router
    .route('/')
    .get(CategoryController.all)  
      
 router
 .route('/all')
 .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence']),CategoryController.all_category)  
    
router
    .route('/:id')
    .get(CategoryController.ById)    
  
router
    .route('/delete/:id')
    .delete(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence']),CategoryController.delete)    
  
router
    .route('/cars/:id')
    .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence','client']),CategoryController.category_cars) 


    module.exports = router;