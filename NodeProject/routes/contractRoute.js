const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleWare/auth.js');
const contract = require('../contractContext/testContract/contractTest.js')

router.get('/',contract.getValue);
router.post('/',contract.setValue);

module.exports = router;