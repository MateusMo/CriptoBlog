const express = require('express');
const router = express.Router();
const coinController = require('../controllers/coinController.js');
const authenticateToken = require('../middleWare/auth.js');

/**
 * @swagger
 * tags:
 *   name: Coins
 *   description: Coin management
 */

/**
 * @swagger
 * /coins:
 *   get:
 *     summary: Get all coins
 *     description: Returns a list of all coins.
 *     tags: [Coins]
 *     responses:
 *       200:
 *         description: A list of coins.
 */
router.get('/', authenticateToken, coinController.getAll);

/**
 * @swagger
 * /coins/{id}:
 *   get:
 *     summary: Get a coin by ID
 *     description: Returns a coin with the specified ID.
 *     tags: [Coins]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the coin to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The coin with the specified ID.
 */
router.get('/:id', authenticateToken, coinController.getById);

/**
 * @swagger
 * /coins/{id}:
 *   put:
 *     summary: Update a coin
 *     description: Updates a coin with the specified ID.
 *     tags: [Coins]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the coin to update
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The updated coin.
 */
router.put('/:id', authenticateToken, coinController.updateCoin);

/**
 * @swagger
 * /coins:
 *   post:
 *     summary: Create a new coin
 *     description: Creates a new coin.
 *     tags: [Coins]
 *     responses:
 *       200:
 *         description: The newly created coin.
 */
router.post('/', authenticateToken, coinController.postCoin);

/**
 * @swagger
 * /coins/{id}:
 *   delete:
 *     summary: Delete a coin
 *     description: Deletes a coin with the specified ID.
 *     tags: [Coins]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the coin to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The deleted coin.
 */
router.delete('/:id', authenticateToken, coinController.deleteCoin);


module.exports = router;