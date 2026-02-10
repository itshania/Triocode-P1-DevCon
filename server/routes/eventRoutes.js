const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const eventController = require('../controllers/eventController');

// All routes protected by JWT
router.get('/', verifyToken, eventController.getAllEvents);
router.get('/:id', verifyToken, eventController.getEventById);
router.post('/', verifyToken, eventController.createEvent);
router.put('/:id', verifyToken, eventController.updateEvent);
router.delete('/:id', verifyToken, eventController.deleteEvent);

module.exports = router;
