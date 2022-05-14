import express from 'express';

import { createEvent, deleteEvent, getEvent } from '../controllers/events';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/events', auth , createEvent);
router.get('/events', getEvent);
router.get('/events/:id', getEvent);
router.delete('events/:id', auth, deleteEvent);

export default router;