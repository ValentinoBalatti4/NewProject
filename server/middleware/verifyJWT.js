const jwt = require('jsonwebtoken')
require('dotenv').config

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization

    if(!authHeader?.startswith('Bearer ')){
        return res.status(401).json({ message: 'Unauthorized'})
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(
        token,
        process.env.JWT_KEY,
        (err, decoded) => {
            if(err) return res.status(403).json({ message: 'Forbidden'})
            req.user = decoded.userInfo.username
            req.id = decoded.userInfo.id
            next()
        }
    )

}

module.exports = verifyJWT