const express = require("express");
const router = express.Router();
const {
  createEvent,
  getAllEvent,
  getSingleEvent,
  deleteEvent,
  updateEvent,
} = require("../controllers/eventController");

router.route("/create").post(createEvent);
router.route("/get_all").get(getAllEvent);
router.route("/get/:id").get(getSingleEvent);
router.route("/update/:id").patch(updateEvent);
router.route("/delete").delete(deleteEvent);

module.exports = router;
