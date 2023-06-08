const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleWare/auth.js');
const contract = require('../contractContext/testContract/contractTest.js')

/**
 * @swagger
 * tags:
 *   name: Contracts
 *   description: Coin management
 */


/**
 * @swagger
 * /contract/value:
 *   get:
 *     summary: Get contract value
 *     description: Returns the value of the contract.
 *     tags: [Contracts]
 *     responses:
 *       200:
 *         description: The value of the contract.
 */
router.get('/contract/value', authenticateToken, contract.getValue);

/**
 * @swagger
 * /contract/value:
 *   post:
 *     summary: Set contract value
 *     description: Sets the value of the contract.
 *     tags: [Contracts]
 *     responses:
 *       200:
 *         description: The contract value is set successfully.
 */
router.post('/contract/value', authenticateToken, contract.setValue);


module.exports = router;