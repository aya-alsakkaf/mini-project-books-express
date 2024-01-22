const Book = require("../../models/Book.js");
const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ message: books });
  } catch (error) {
    next(error);
  }
};

const createABook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const book = await Book.create(req.body);
    return res.status(201).json({ message: book });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getBookById = async (req, res, next) => {
  try {
    const _id = req.params._id;
    const book = await Book.findById(_id);
    return res.status(200).json({ message: book });
  } catch (error) {
    next(error);
  }
};

const deleteBookById = async (req, res, next) => {
  try {
    const _id = req.params._id;
    const book = await Book.findByIdAndDelete(_id);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const updateBookById = async (req, res, next) => {
  try {
    const _id = req.params._id;
    if (req.file) {
      req.body.image = req.file.path;
    }
    const book = await Book.findByIdAndUpdate(_id, req.body);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBooks,
  createABook,
  getBookById,
  deleteBookById,
  updateBookById,
};
