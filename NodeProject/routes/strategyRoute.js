const express = require('express');
const router = express.Router();
const strategyController = require('../controllers/strategyController')

router.get('/',strategyController.getAll);
router.get('/:id',strategyController.getById);
router.get('/',strategyController.postStrategy);
router.get('/:id',strategyController.putStrategy);
router.get('/:id',strategyController.deleteStrategy);


module.exports = router;