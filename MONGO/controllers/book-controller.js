const Author = require('../models/Author');
const Book = require('../models/Book');

const createAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Author created successfully',
            data: author
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Book created successfully',
            data: book
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createAuthor,
    createBook
}