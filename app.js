const express = require('express');
const cors = require('cors');
const path = require('path');
const automobileRoutes = require('./routes/automobileRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/automobiles', automobileRoutes);

// Root route for testing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;