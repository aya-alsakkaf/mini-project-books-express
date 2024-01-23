express = require("express");
authorRouter = express.Router();
authorRouter.use(express.json());

const {getAllAuthors, createAuthor} = require("./controller.js");

authorRouter.get("/", getAllAuthors);
authorRouter.post("/", createAuthor);

module.exports = authorRouter;