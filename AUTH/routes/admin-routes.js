const authMiddleware = require('../middleware/auth-middleware');

const router = require('express').Router();

router.get('/admin', authMiddleware, (req, res) => {
    const {username, id, role} = req.user;
    if(role !== 'admin') {
        return res.status(403).json({
            message: 'Forbidden',
            success: false
        })
    }
    
    res.json({
        message: 'Welcome to the admin page!',
        user: {
            username,
            id,
            role
        }
    })
})

module.exports = router;