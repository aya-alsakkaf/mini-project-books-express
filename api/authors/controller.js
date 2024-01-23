const Author = require("../../models/Author");

const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find().populate("books");
    return res.status(200).json({ message: authors });
  } catch (error) {
    next(error);
  }
};

const createAuthor = async (req, res, next) => {
  try {
    const author = await Author.create(req.body);
    return res.status(201).json({ message: author });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllAuthors,
  createAuthor,
};
