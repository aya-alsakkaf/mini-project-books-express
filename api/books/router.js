express = require("express");
bookRouter = express.Router();
bookRouter.use(express.json());
const multer = require("multer");
const upload = require("../../middleware/multer.js");
const {
  getAllBooks,
  createABook,
  getBookById,
  deleteBookById,
  updateBookById,
} = require("./controller.js");

bookRouter.get("/", getAllBooks);
bookRouter.post("/:authorID", upload.single("bookPicture"), createABook);
bookRouter.get("/:_id", getBookById);
bookRouter.delete("/:_id", deleteBookById);
bookRouter.put("/:_id", upload.single("bookPicture"), updateBookById);

module.exports = bookRouter;
