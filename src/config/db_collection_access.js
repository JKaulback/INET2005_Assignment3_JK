// --- IMPORTS ---
require('dotenv').config({ path: __dirname + "/../.env"});
const { getDB } = require('./db_connection');

// --- VARIABLE SETUP ---
const COLLECTION_NAME = process.env.PRODUCT_COLLECTION

let _coll;

// --- FUNCTIONS ---
async function getColl() {
    if (!_coll) {
        const db = await getDB();
        _coll = db.collection(COLLECTION_NAME);
    }
    return _coll;
}

async function getDocumentCount() {
    const coll = await getColl();
    return coll.countDocuments();
}

module.exports = { getColl, getDocumentCount };