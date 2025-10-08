// --- IMPORTS ---
const { getDB } = require('./db_connection');

// --- VARIABLE SETUP ---
let _coll;

// --- FUNCTIONS ---
async function getColl(COLLECTION_NAME) {
    // Validate the collection name exists
    if (!COLLECTION_NAME) throw new Error('Collection name is required');
    // Validate the collection name is a string
    if (typeof COLLECTION_NAME !== 'string') throw new Error('Collection name must be a string');
    // Validate the collection name has at least one character
    if (COLLECTION_NAME.trim().length === 0) throw new Error('Collection name cannot be empty');

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