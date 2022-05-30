const asyncHandler = require("express-async-handler");
const Product = require("../models/marketplaceModel");

//Create event
const createProduct = asyncHandler(async (req, res) => {
  const { name, price, selectedFile, category } = req.body;
  const productData = new Product({
    name,
    price,
    category,
    selectedFile,
  });
  try {
    const result = await productData.save();
    res.status(201).json({
      message: "product created successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

//Get all event
const getAllProduct = asyncHandler(async (req, res) => {
  try {
    const result = await Product.find({});
    res.status(200).json({
      message: "Get all product data successfully...!",
      data: result,
    });
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = {
  createProduct,
  getAllProduct,
};
