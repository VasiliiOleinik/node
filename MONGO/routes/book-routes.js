const { createAuthor, createBook } = require('../controllers/book-controller');

const router = require('express').Router();

router.post('/author', createAuthor);
router.post('/book', createBook);

module.exports = router;