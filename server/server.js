require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Smart Event Management Backend Running!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});