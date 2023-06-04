const express = require('express');
const router = express.Router();
const strategyController = require('../controllers/strategyController');
const authenticateToken = require('../middleWare/auth.js');

router.get('/',authenticateToken,strategyController.getAll);
router.get('/:id',authenticateToken,strategyController.getById);
router.get('/',authenticateToken,strategyController.postStrategy);
router.get('/:id',authenticateToken,strategyController.putStrategy);
router.get('/:id',authenticateToken,strategyController.deleteStrategy);


module.exports = router;