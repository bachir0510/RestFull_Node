const bookController = {};

const Book = require("../models/Book");

// Create Book
bookController.createBook = async (req, res) => {
  try {
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      read: req.body.read,
    });
    await newBook.save();
    res.json({ message: "Book Seved" });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong creating a book",
    });
  }
};

// Find Books
bookController.getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrievign the books",
    });
  }
};

// Find Book By Id
bookController.getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);

    if (!book) {
      return res
        .status(404)
        .json({ message: `Book with id ${id} does not exist` });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error retrieving book with id ${id}`,
    });
  }
};

// Update Book
bookController.updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndUpdate(id);
    if (!book) {
      return res
        .status(404)
        .json({ message: `Book with id ${id} does not exist` });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error updating book with id ${id}`,
    });
  }
};

// Delete Book
bookController.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res
        .status(404)
        .json({ message: `Book with id ${id} does not exist` });
    }
    res.json({
      message: "Book were deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error Deleting Book with id ${id}`,
    });
  }
};

module.exports = bookController;
