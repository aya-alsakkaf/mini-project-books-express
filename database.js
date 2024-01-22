const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectdb;
