// --- IMPORTS ---
const express = require('express');
const { getDocumentCount } = require('./config/db_collection_access');
require('dotenv').config()

// --- APP SETUP ---
const app = express();
const PORT = process.env.PORT;

// --- TEST ---
app.get('/', async (req,res) => {
    const count = await getDocumentCount();
    res.json({
        status: 'ok',
        time: new Date().toISOString(),
        collectionCount: count 
    });
});

// --- ROUTES ---


// --- START SERVER ---
app.listen(PORT, () => {
    console.log(`Assignment 3 - MongoDB API listening on http://localhost:${PORT}`);
});