const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleWare/auth.js');

// Get all users
router.get('/',authenticateToken,userController.getAllUsers);

// Get user by ID
router.get('/:id',authenticateToken,userController.getUserById);

//Create new user
router.post('/',authenticateToken,userController.postUser);

//Delete a user
router.delete('/',authenticateToken,userController.deleteUser);

//Update user
router.put('/:id',authenticateToken,userController.putUser)

module.exports = router;
