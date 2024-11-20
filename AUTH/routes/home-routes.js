const authMiddleware = require('../middleware/auth-middleware');

const router = require('express').Router();

router.get('/welcome', authMiddleware, (req, res) => {
    const {username, id, role} = req.user;
    res.json({
        message: 'Welcome to the home page!',
        user: {
            username,
            id,
            role
        }
    })
})

module.exports = router;