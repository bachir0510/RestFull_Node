const { Router } = require("express");
const router = Router();
const {
  createBook,
  getBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");

router.route("/book")
.post(createBook)
.get(getBook);

router.route("/book/:id")
.get(getBookById)
.put(updateBook)
.delete(deleteBook);

module.exports = router;
