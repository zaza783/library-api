const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');
const rateLimiter = require('../middlewares/rateLimiter');
const bookModel = require('../models/bookModel');

const bookController = new BookController(bookModel); // Pass bookModel to the constructor

// Rate limiting middleware applied to all book routes
router.use(rateLimiter);

// Get all books with pagination
router.get('/', bookController.getAllBooks.bind(bookController));

// Get a specific book by ID
router.get('/:id', bookController.getBookById.bind(bookController));

// Add a new book
router.post('/', bookController.addBook.bind(bookController));

// Update an existing book by ID
router.put('/:id', bookController.updateBook.bind(bookController));

// Delete a book by ID
router.delete('/:id', bookController.deleteBook.bind(bookController));

module.exports = router;