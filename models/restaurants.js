const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  cost: { type: String, required: true },
  image: { type: String, required: true }
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;