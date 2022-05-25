const asyncHandler = require("express-async-handler");
const Event = require("../models/evenModel");

//Create event
const createEvent = asyncHandler(async (req, res) => {
  const { title, message, name, creator, tags, attending } = req.body;
  const eventData = new Event({
    title,
    message,
    name,
    creator,
    tags,
    attending,
  });
  try {
    const result = await eventData.save();
    res.status(201).json({
      message: "event created successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

//Get all event
const getAllEvent = asyncHandler(async (req, res) => {
  try {
    const result = await Event.find({});
    res.status(200).json({
      message: "Get all event data successfully...!",
      data: result,
    });
  } catch (error) {
    res.json({ message: error });
  }
});

//Get single event
const getSingleEvent = asyncHandler(async (req, res) => {
  const event_id = req.params.id;
  try {
    const result = await Event.findById(event_id);
    res.status(200).json({
      message: "Get single data successfully...!",
      data: result,
    });
  } catch (error) {
    res.json({ message: error });
  }
});

//update an Event
const updateEvent = asyncHandler(async (req, res) => {
  const event_id = req.params.id;
  console.log("event id", event_id);
  const event = await Event.findById(event_id);
  if (event) {
    event.title = req.body.title || event.title;
    event.message = req.body.message || event.message;
    event.name = req.body.name || event.name;
    event.creator = req.body.creator || event.creator;
    event.tags = req.body.tags || event.tags;
    event.attending = req.body.attending || event.attending;
    event.comments = req.body.attending || event.req.body.attending;
  }
  try {
    updateEvent = await event.save();
    res.status(201).json({
      message: "event updated successfully!",
    });
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

// delete an event
const deleteEvent = asyncHandler(async (req, res) => {
  console.log("update event called");
});
module.exports = {
  createEvent,
  getAllEvent,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};
