import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
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
})

var Event = mongoose.model('Event', eventSchema);

export default Event;