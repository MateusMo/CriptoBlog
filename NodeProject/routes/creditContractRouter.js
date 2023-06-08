const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleWare/auth.js');
const contract = require('../contractContext/CreditContract/creditContract.js');

/**
 * @swagger
 * tags:
 *   name: creditRouter
 *   description: Coin management
 */

/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Get the value related to a wallet
 *     description: Get the value related to a wallet.
 *     tags: [creditRouter]
 *     responses:
 *       200:
 *         description: Get the value related to a wallet.
 */
router.get('/:address',contract.getCredit);

/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Add a value related to a wallet
 *     description: Add a value related to a wallet.
 *     tags: [creditRouter]
 *     responses:
 *       200:
 *         description: Add a value related to a wallet.
 */
router.post('/',contract.addCredit);

module.exports = router;