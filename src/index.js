// --- IMPORTS ---
const express = require('express');
require('dotenv').config()


// --- APP SETUP ---
const app = express();
const PORT = process.env.PORT;

// --- TEST ---
app.get('/', (req,res) => {
    res.json({
        status: 'ok',
        time: new Date().toISOString()
    });
});

// --- START SERVER ---
app.listen(PORT, () => {
    console.log(`Assignment 3 - MongoDB API listening on http://localhost:${PORT}`);
});