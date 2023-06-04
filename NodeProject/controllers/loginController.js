const { User } = require('../models')
const jwt = require('jsonwebtoken');
const authConfig = require('../middleWare/authConfig')
const secretKey = authConfig.secretKey;

const Login = async (req, res) => {
    try {
        const { wallet, password } = req.body;
        const user = await User.findOne({
            where: {
                wallet: wallet,
                password: password
            }
        });
        if (user) {
            const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
            res.status(200).send({message: token});
        } else {
            res.status(404).send({ message: "Incorrect wallet or password" })
        }
    } catch (error) {
        res.status(500).send({ message: "Não foi possível realizar o login, erro 500" })
    }
};

module.exports = { Login }