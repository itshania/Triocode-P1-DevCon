require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// ⚡ CORS configuration
app.use(cors({
  origin: 'http://localhost:3000', // your frontend URL
  credentials: true,               // allow cookies (optional)
}));

// Parse JSON bodies
app.use(bodyParser.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const floorPlanRoutes = require('./routes/floorPlanRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/floorplans', floorPlanRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Smart Event Platform API running!');
});

// Handle 404 for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
