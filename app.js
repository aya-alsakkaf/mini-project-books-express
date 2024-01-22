const express = require("express");
const connectdb = require("./database.js");
const app = express();
const bookRouter = require("./api/books/router.js");
const morgan = require("morgan");
const cors = require("cors");
const PORT = 8000;

app.use(morgan("dev"));
app.use(cors());
app.use("/api/books", bookRouter);

app.use((req, res, next) => {
  return res.status(404).json({ message: "Path not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).json({ message: "Internal server error" });
});

connectdb();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
