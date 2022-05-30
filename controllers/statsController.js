const asyncHandler = require("express-async-handler");
const PostMessage = require("../models/postModel");
const Event = require("../models/evenModel");
const Product = require("../models/marketplaceModel");
const stats = asyncHandler(async (req, res) => {
  console.log("api called");
  const postData = await PostMessage.find();
  const eventData = await Event.find();
  const productData = await Product.find();
  overAllData = [
    {
      label: "Post",
      value: postData.length,
    },
    {
      label: "Event",
      value: eventData.length,
    },
    {
      label: "Product",
      value: productData.length,
    },
  ];
  try {
    res.json({
      message: "successfully get data",
      data: { overAllData },
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  stats,
};
