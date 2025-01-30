const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  publicationDate: {
    type: Date,
    required: true
  },
  availability: {
    type: String,
    enum: ['available', 'checked out', 'lost', 'damaged'],
    default: 'available'
  },
  edition: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;