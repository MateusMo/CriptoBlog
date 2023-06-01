const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/',async (req,res,next)=>{
    try {
        const Users = await User.findAll();
        if(!Users){ return res.status(400).send({message:'No user was found'}) }
        return res.status(200).send({message: Users});        
    } catch (error) {
        console.log(error)
        res.status(500).send({message: error})
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(400).send({ message: 'No user was found' });
        }
        return res.status(200).send({ message: user });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error });
    }
});



module.exports = router;