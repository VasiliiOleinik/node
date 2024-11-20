const express = require('express');
const { getAllBooks, getSingeBook, addBook, updateBook, deleteBook } = require('../controllers/book-controller');
const { get } = require('mongoose');

// router
const router = express.Router();

// all routes related to books
router.get('/get', getAllBooks);
router.get('/get/:id', getSingeBook)
router.post('/add', addBook)
router.put('/update/:id', updateBook)
router.delete('/delete/:id', deleteBook)

module.exports = router;