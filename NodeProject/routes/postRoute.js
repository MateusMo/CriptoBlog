const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authenticateToken = require('../middleWare/auth.js');

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts
 *     description: Returns a list of all posts.
 *     responses:
 *       200:
 *         description: A list of posts.
 */
router.get('/posts', authenticateToken, postController.getAll);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Get a post by ID
 *     description: Returns a post with the specified ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the post.
 *     responses:
 *       200:
 *         description: The requested post.
 *       404:
 *         description: Post not found.
 */
router.get('/posts/:id', authenticateToken, postController.getById);

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     description: Creates a new post.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *             required:
 *               - title
 *               - content
 *     responses:
 *       200:
 *         description: The created post.
 */
router.post('/posts', authenticateToken, postController.postPost);

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Update a post
 *     description: Updates a post with the specified ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the post.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *             required:
 *               - title
 *               - content
 *     responses:
 *       200:
 *         description: The updated post.
 *       404:
 *         description: Post not found.
 */
router.put('/posts/:id', authenticateToken, postController.putPost);

/**
 * @swagger
 * /posts:
 *   delete:
 *     summary: Delete a post
 *     description: Deletes a post.
 *     responses:
 *       200:
 *         description: The deleted post.
 */
router.delete('/posts', authenticateToken, postController.deletePost);

module.exports = router;