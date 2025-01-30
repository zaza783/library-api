const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');
const rateLimiter = require('../middlewares/rateLimiter');

const bookController = new BookController();

// Rate limiting middleware applied to all book routes
router.use(rateLimiter);

// Get all books with pagination
router.get('/api/v1/books', bookController.getAllBooks);

// Get a specific book by ID
router.get('/api/v1/books/:id', bookController.getBookById);

// Add a new book
router.post('/api/v1/books', bookController.addBook);

// Update an existing book by ID
router.put('/api/v1/books/:id', bookController.updateBook);

// Delete a book by ID
router.delete('/api/v1/books/:id', bookController.deleteBook);

module.exports = router;