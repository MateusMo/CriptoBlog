const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

//Get all posts
router.get('/',postController.getAll);

//Get by Id
router.get('/:id',postController.getById);

//Create a new post
router.post('/',postController.postPost);

//Update a post
router.put('/:id',postController.putPost);

//Delete a post
router.delete('/',postController.deletePost);

module.exports = router;