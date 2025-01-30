const express = require('express');
const router = express.Router();

class BookController {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }

    async getAllBooks(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const books = await this.bookModel.find()
                .limit(limit * 1)
                .skip((page - 1) * limit)
                .exec();
            const count = await this.bookModel.countDocuments();
            res.status(200).json({
                status: "success",
                code: 200,
                message: "Books retrieved successfully",
                data: {
                    books,
                    pagination: {
                        current_page: page,
                        per_page: limit,
                        total_pages: Math.ceil(count / limit),
                        total_books: count
                    }
                }
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                code: 500,
                message: "Internal server error",
                errors: {
                    details: error.message
                }
            });
        }
    }

    async getBookById(req, res) {
        try {
            const book = await this.bookModel.findById(req.params.id);
            if (!book) {
                return res.status(404).json({
                    status: "error",
                    code: 404,
                    message: "Book not found",
                    errors: {
                        details: "No book found with the given ID."
                    }
                });
            }
            res.status(200).json({
                status: "success",
                code: 200,
                message: "Book details retrieved successfully",
                data: { book }
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                code: 500,
                message: "Internal server error",
                errors: {
                    details: error.message
                }
            });
        }
    }

    async addBook(req, res) {
        try {
            const newBook = new this.bookModel(req.body);
            await newBook.save();
            res.status(201).json({
                status: "success",
                code: 201,
                message: "Book added successfully",
                data: { book: newBook }
            });
        } catch (error) {
            res.status(400).json({
                status: "error",
                code: 400,
                message: "Bad request",
                errors: {
                    details: error.message
                }
            });
        }
    }

    async updateBook(req, res) {
        try {
            const updatedBook = await this.bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedBook) {
                return res.status(404).json({
                    status: "error",
                    code: 404,
                    message: "Book not found",
                    errors: {
                        details: "No book found with the given ID."
                    }
                });
            }
            res.status(200).json({
                status: "success",
                code: 200,
                message: "Book updated successfully",
                data: { book: updatedBook }
            });
        } catch (error) {
            res.status(400).json({
                status: "error",
                code: 400,
                message: "Bad request",
                errors: {
                    details: error.message
                }
            });
        }
    }

    async deleteBook(req, res) {
        try {
            const deletedBook = await this.bookModel.findByIdAndDelete(req.params.id);
            if (!deletedBook) {
                return res.status(404).json({
                    status: "error",
                    code: 404,
                    message: "Book not found",
                    errors: {
                        details: "No book found with the given ID."
                    }
                });
            }
            res.status(204).json({
                status: "success",
                code: 204,
                message: "Book deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                code: 500,
                message: "Internal server error",
                errors: {
                    details: error.message
                }
            });
        }
    }
}

module.exports = BookController;