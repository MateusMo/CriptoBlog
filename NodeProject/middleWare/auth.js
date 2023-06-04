const jwt = require('jsonwebtoken');
const authConfig = require('../middleWare/authConfig')
const secretKey = authConfig.secretKey;

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Authentication token is required' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
