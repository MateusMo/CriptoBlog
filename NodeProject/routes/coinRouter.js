const express = require('express');
const router = express.Router();
const coinController = require('../controllers/coinController.js');
const authenticateToken = require('../middleWare/auth.js');

router.get('/',authenticateToken,coinController.getAll)
router.get('/:id',authenticateToken,coinController.getById)
router.put('/:id',authenticateToken,coinController.updateCoin)
router.post('/',authenticateToken,coinController.postCoin)
router.delete('/:id',authenticateToken,coinController.deleteCoin)


module.exports = router;