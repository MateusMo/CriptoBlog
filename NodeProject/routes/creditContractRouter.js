const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleWare/auth.js');
const contract = require('../contractContext/CreditContract/creditContract.js');
//falta adicionar validação jwt,falta adicionar swagger
router.get('/:address',contract.getCredit);
router.post('/',contract.addCredit);

module.exports = router;