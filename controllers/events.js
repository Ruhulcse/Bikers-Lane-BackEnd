import express from 'express';
import mongoose from 'mongoose';

import Event from '../models/event';

const router = express.Router();

export const getEvents = async (req, res) => {
    const { page } = req.query;
    
    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await Event.countDocuments({});
        const events = await Event.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: events, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}


export const getEvent = async (req, res) => { 
    const { id } = req.params;

    try {
        const event = await Event.findById(id);
        
        res.status(200).json(event);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createEvent = async (req, res) => {
    const event = req.body;

    const newEvent = new Event({ ...event, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await Event.save();

        res.status(201).json(newEvent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Event with id: ${id}`);

    await Event.findByIdAndRemove(id);

    res.json({ message: "Event deleted successfully." });
}

export const likeEvent = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);
    
    const event = await Event.findById(id);

    const index = event.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
        event.likes.push(req.userId);
    } else {
        event.likes = event.likes.filter((id) => id !== String(req.userId));
    }

    const updatedEvent = await Event.findByIdAndUpdate(id, event, { new: true });

    res.status(200).json(updatedEvent);
}

export const commentEvent = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    const event = await Event.findById(id);

    event.comments.push(value);

    const updatedEvent = await Event.findByIdAndUpdate(id, event, { new: true });

    res.json(updatedEvent);
};

export default router;