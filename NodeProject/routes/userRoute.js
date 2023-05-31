const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/',(req,res,next)=>{
    try {
        const Users = User.getAll();
        if(!Users){ return res.status(400).send({message:'No user was found'}) }
        return res.status(200).send({message: Users});        
    } catch (error) {
        res.status(500).send({message: error})
    }

})

module.exports = router;