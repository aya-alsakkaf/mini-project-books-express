const { model, Schema } = require("mongoose");

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, default: 5 },
  image: { type: String, default: "media/defaultImagePicture.png" },
});

module.exports = model("Book", bookSchema);
