const express = require('express');
const rateLimiter = require('./middlewares/rateLimiter');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(rateLimiter);

// Routes
app.use('/api/v1/books', bookRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Library Management API');
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        status: 'error',
        code: err.status || 500,
        message: err.message || 'Internal Server Error',
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});