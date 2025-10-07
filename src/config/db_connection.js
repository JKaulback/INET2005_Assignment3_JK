// --- IMPORTS ---
const { MongoClient } = require("mongodb");
require('dotenv').config({ path: __dirname + '/../.env' });

// --- VARIABLE SETUP ---
const DB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.COMPANY_DB_NAME;

let _client;
let _db;

// --- FUNCTIONS ---
async function initDB() {
    if (!_client) {
        _client = new MongoClient(DB_URI, {
            directConnection: true
        });
        await _client.connect();
        _db = _client.db(DB_NAME);
    }
}

async function getDB() {
    if (!_db) {
        await initDB();
    }
    return _db;
}

module.exports = { getDB }