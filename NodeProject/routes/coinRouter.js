const express = require('express');
const router = express.Router();
const coinController = require('../controllers/coinController.js');

router.get('/',coinController.getAll)
router.get('/:id',coinController.getById)
router.put('/:id',coinController.updateCoin)
router.post('/',coinController.postCoin)
router.delete('/:id',coinController.deleteCoin)


module.exports = router;