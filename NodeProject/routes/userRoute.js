const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
router.get('/', userController.getAllUsers);

// Get user by ID
router.get('/:id', userController.getUserById);

//Create new user
router.post('/',userController.postUser);

//Delete a user
router.delete('/',userController.deleteUser);

//Update user
router.put('/',userController.putUser)

module.exports = router;
