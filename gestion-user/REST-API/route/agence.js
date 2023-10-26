const express = require('express')
const router = express.Router()
const AgennceController = require('../controller/AgenceController');
const AuthMiddleware = require('./../middleware/Authmiddleware');
const multer = require('multer')
const upload = multer();

router
    .route('/create')
    .post(upload.fields([{ name: 'image', maxCount: 1}]),AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence']),AgennceController.create)

router
    .route('/update/:id')
    .post(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence']),AgennceController.update)    

router
    .route('/')
    .get(AgennceController.all)  
router
    .route('/all')
    .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence']),AgennceController.all_agence)  

router
    .route('/:id')
    .get(AgennceController.ById)   
    
router
    .route('/category/:id')
    .get(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence','client']),AgennceController.agence_category) 
router
    .route('/delete/:id')
    .delete(AuthMiddleware.virifylogin,AuthMiddleware.UserRole(['admin','agence']),AgennceController.delete)  

    
module.exports = router;