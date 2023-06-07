const express = require('express');
const router = express.Router();
const strategyController = require('../controllers/strategyController');
const authenticateToken = require('../middleWare/auth.js');

/**
 * @swagger
 * /strategies:
 *   get:
 *     summary: Get all strategies
 *     description: Returns a list of all strategies.
 *     responses:
 *       200:
 *         description: A list of strategies.
 */
router.get('/strategies', authenticateToken, strategyController.getAll);

/**
 * @swagger
 * /strategies/{id}:
 *   get:
 *     summary: Get strategy by ID
 *     description: Returns a strategy based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the strategy
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The strategy with the provided ID.
 */
router.get('/strategies/:id', authenticateToken, strategyController.getById);

/**
 * @swagger
 * /strategies:
 *   post:
 *     summary: Create a new strategy
 *     description: Creates a new strategy.
 *     responses:
 *       200:
 *         description: The newly created strategy.
 */
router.post('/strategies', authenticateToken, strategyController.postStrategy);

/**
 * @swagger
 * /strategies/{id}:
 *   put:
 *     summary: Update a strategy
 *     description: Updates an existing strategy based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the strategy
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The updated strategy.
 */
router.put('/strategies/:id', authenticateToken, strategyController.putStrategy);

/**
 * @swagger
 * /strategies/{id}:
 *   delete:
 *     summary: Delete a strategy
 *     description: Deletes a strategy based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the strategy
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The deleted strategy.
 */
router.delete('/strategies/:id', authenticateToken, strategyController.deleteStrategy);

module.exports = router;