const Book = require('../models/Book');

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSingeBook = async (req, res) => {
    try {
        const bookDetailsById = await Book.findById(req.params.id);
        if(!bookDetailsById) {
            res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Book details',
            data: bookDetailsById
        });
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
}

const addBook = async (req, res) => {
    try {
        const newFormData = req.body;
        const newBook = new Book(newFormData);
        if(!newFormData) {
            res.status(400).json({ message: 'Please provide all the required fields' });
        }
        const savedBook = await newBook.save();
        res.status(201).json({
            success: true,
            message: 'Book added successfully',
            data: savedBook
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!updatedBook) {
            res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            data: updatedBook
        });
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if(!deletedBook) {
            res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Book deleted successfully',
        });
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllBooks,
    getSingeBook,
    addBook,
    updateBook,
    deleteBook
}