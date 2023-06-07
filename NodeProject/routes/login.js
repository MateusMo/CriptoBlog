const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController')

/**
 * @swagger
 * /login:
 *   get:
 *     summary: User login
 *     description: Logs in a user.
 *     responses:
 *       200:
 *         description: User logged in successfully.
 */
router.get('/login', loginController.Login);

module.exports = router;