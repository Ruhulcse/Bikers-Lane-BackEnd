const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: String,
  price: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Product = mongoose.model("ProductSchema", ProductSchema);

module.exports = Product;
