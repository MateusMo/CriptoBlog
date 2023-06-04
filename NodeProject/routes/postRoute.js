const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authenticateToken = require('../middleWare/auth.js');

//Get all posts
router.get('/',authenticateToken,postController.getAll);

//Get by Id
router.get('/:id',authenticateToken,postController.getById);

//Create a new post
router.post('/',authenticateToken,postController.postPost);

//Update a post
router.put('/:id',authenticateToken,postController.putPost);

//Delete a post
router.delete('/',authenticateToken,postController.deletePost);

module.exports = router;