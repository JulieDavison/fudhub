const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  food: { type: String, required: true },
  image: { type: String, required: true }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;