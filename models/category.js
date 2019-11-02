const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  budget: { type: String},
  food: { type: String },
  recipe: { type:String },
  restaurant: { type: String }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;