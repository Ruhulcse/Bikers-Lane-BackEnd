const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProduct,
} = require("../controllers/marketPlaceController");

router.route("/").post(createProduct);
router.route("/").get(getAllProduct);
module.exports = router;
