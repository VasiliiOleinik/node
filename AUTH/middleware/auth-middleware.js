const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if(!token) {
    return res.status(401).json({
        message: 'Unauthorized',
        success: false
    })
  }

  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
        message: 'Unauthorized',
        success: false
    })
  }

}

module.exports = authMiddleware;