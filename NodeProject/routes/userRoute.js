const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleWare/auth.js');


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Returns a list of all users.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users.
 */
router.get('/', authenticateToken, userController.getAllUsers);

/**
 * @swagger
 * /usersById:
 *   get:
 *     summary: Get a user by id
 *     description: Returns a list of all users.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A user.
 */
router.get('/:id', authenticateToken, userController.getUserById);

/**
 * @swagger
 * /PostUser:
 *   post:
 *     summary: create a new user
 *     tags: [Users]
 *     description: create a new user.
 *     responses:
 *       200:
 *         description: New user.
 */
router.post('/', authenticateToken, userController.postUser);

/**
 * @swagger
 * /DeleteUser:
 *   delete:
 *     summary: delete a user by his Id
 *     description: delete a user.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: delete a user.
 */
router.delete('/', authenticateToken, userController.deleteUser);

/**
 * @swagger
 * /PutUser:
 *   put:
 *     summary: Update a user
 *     description: Update a user.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Update a user.
 */
router.put('/:id', authenticateToken, userController.putUser)

module.exports = router;
