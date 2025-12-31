const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  guests: { type: Number, required: true },
  amenities: { type: [String], required: true },
});

module.exports = mongoose.model("Home", homeSchema);
