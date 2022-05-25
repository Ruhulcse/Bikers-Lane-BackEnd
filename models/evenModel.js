const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  attending: { type: [String], default: [] },
  comments: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  eventDate: {
    type: Date,
    default: new Date(),
  },
});
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
