// --- IMPORTS ---
const express = require('express');
const productsRouter = require('./routes/productsRouter');
require('dotenv').config()

// --- APP SETUP ---
const app = express();
const PORT = process.env.PORT;

// --- ROUTES ---
app.use('/products', productsRouter);

// --- TEST ---
app.get('/', async (req,res) => {
    res.json({
        status: 'ok',
        time: new Date().toISOString()
    });
});

// --- START SERVER ---
app.listen(PORT, () => {
    console.log(`Assignment 3 - MongoDB API listening on http://localhost:${PORT}`);
});