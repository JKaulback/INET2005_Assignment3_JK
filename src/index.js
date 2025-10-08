// --- IMPORTS ---
const express = require('express');
const productsRouter = require('./routes/productsRouter');
const { specs, swaggerUi } = require('./config/swagger');
require('dotenv').config()

// --- APP SETUP ---
const app = express();
const PORT = process.env.PORT || 3000;

// --- SWAGGER SETUP ---
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// --- ROUTES ---
app.use('/products', productsRouter);

// --- HEALTH CHECK ---
app.get('/', async (req,res) => {
    res.json({
        status: 'ok',
        time: new Date().toISOString(),
        documentation: 'http://localhost:3000/api-docs'
    });
});

// --- START SERVER ---
app.listen(PORT, () => {
    console.log(`Assignment 3 - MongoDB API listening on http://localhost:${PORT}`);
    console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});