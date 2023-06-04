const express = require('express');
const router = express.Router();
const Comment  = require('../controllers/commentController')
const authenticateToken = require('../middleWare/auth.js');

router.get('/',authenticateToken,Comment.getAll);
router.get('/:id',authenticateToken,Comment.getById);
router.post('/',authenticateToken,Comment.postComment);
router.put('/:id',authenticateToken,Comment.putComment);
router.delete('/:id',authenticateToken,Comment.deleteComment);

module.exports = router;