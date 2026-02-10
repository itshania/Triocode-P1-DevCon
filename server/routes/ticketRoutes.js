const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const ticketController = require('../controllers/ticketController');

// All routes protected by JWT
router.get('/', verifyToken, ticketController.getAllTickets);
router.get('/:id', verifyToken, ticketController.getTicketById);
router.post('/', verifyToken, ticketController.createTicket);
router.put('/:id', verifyToken, ticketController.updateTicket);
router.delete('/:id', verifyToken, ticketController.deleteTicket);

module.exports = router;
