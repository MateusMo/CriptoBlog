const express = require('express');
const router = express.Router();
const Comment  = require('../controllers/commentController')
const authenticateToken = require('../middleWare/auth.js');

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Coin management
 */

/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Get all comments
 *     description: Returns a list of all comments.
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: A list of comments.
 */
router.get('/comments', authenticateToken, Comment.getAll);

/**
 * @swagger
 * /comments/{id}:
 *   get:
 *     summary: Get a comment by ID
 *     description: Returns a comment based on the provided ID.
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the comment.
 *     responses:
 *       200:
 *         description: The requested comment.
 */
router.get('/comments/:id', authenticateToken, Comment.getById);

/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Create a new comment
 *     description: Creates a new comment.
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: The created comment.
 */
router.post('/comments', authenticateToken, Comment.postComment);

/**
 * @swagger
 * /comments/{id}:
 *   put:
 *     summary: Update a comment
 *     description: Updates an existing comment based on the provided ID.
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the comment.
 *     responses:
 *       200:
 *         description: The updated comment.
 */
router.put('/comments/:id', authenticateToken, Comment.putComment);

/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     summary: Delete a comment
 *     tags: [Comments]
 *     description: Deletes a comment based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the comment.
 *     responses:
 *       200:
 *         description: The deleted comment.
 */
router.delete('/comments/:id', authenticateToken, Comment.deleteComment);

module.exports = router;