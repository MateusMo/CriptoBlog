const express = require('express');
const router = express.Router();
const Comment  = require('../controllers/commentController')

router.get('/',Comment.getAll);
router.get('/:id',Comment.getById);
router.post('/',Comment.postComment);
router.put('/:id',Comment.putComment);
router.delete('/:id',Comment.deleteComment);

module.exports = router;