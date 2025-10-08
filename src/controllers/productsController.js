// --- IMPORTS ---
const { ObjectId } = require('mongodb');
require('dotenv').config({ path: __dirname + '../.env'});
const { getColl } = require('../config/db_collection_access');

// --- VARIABLE SETUP ---
const COLLECTION_NAME = process.env.PRODUCT_COLLECTION || 'products';


async function getAllProducts(req, res) {
    try {
        // Cache the collection
        const coll = await getColl(COLLECTION_NAME);

        // Get/set pagination settings
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        // Number of total documents
        const totalCount = await coll.countDocuments();

        // Products selected based on pagination
        const products = await coll.find({})
            .skip(skip)
            .limit(limit)
            .toArray();

        // Total pages based on pagination
        const totalPages = Math.ceil(totalCount / limit);

        // Set response
        res.status(200).json({
            page,
            limit,
            totalPages,
            totalCount,
            count: products.length,
            products
        });

    } catch (error) {
        // Handle failure to fetch products
        console.error(error);
        res.status(500).json({
            error: 'Failed to fetch products',
            details: String(error)
        });
    }
}

async function getProductById(req, res) {
    try {
        // Cache collection & read id from request parameters
        const coll = await getColl(COLLECTION_NAME);
        const { id } = req.params;

        // Validate the id for an object id
        if (!ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid ObjectId' });

        // Get the product selected based on the ObjectId
        const objId = ObjectId.createFromHexString(id);
        const product = await coll.findOne({ _id: objId });

        // Handle no product being found with that id
        if (!product) return res.status(404).json({ error: 'Product not found' });

        // Set response with product
        res.status(200).json(product);

    } catch (error) {
        // Handle a failure to fetch the product
        res.status(500).json({
            error: 'Failed to fetch product',
            details: String(error)
        });
    }
}

async function createProduct(req, res) {
    try {
        // Cache the collection and new product from request body
        const coll = await getColl(COLLECTION_NAME);
        const newProduct = req.body;

        // Insert new product into collection
        const result = await coll.insertOne(newProduct);
        const newId = result.insertedId;

        // Respond with new product id
        res.status(201).json({ insertedId: newId });

    } catch (error) {
        // Handle failure to create a new product
        console.error(error);
        res.status(500).json({
            error: 'Failed to create product',
            details: String(error)
        });
    }
}

async function updateProduct(req, res) {
    try {
        // Cache collection, id, and updates
        const coll = await getColl(COLLECTION_NAME);
        const { id } = req.params;
        const updates = req.body;

        // Validate ObjectId
        if (!ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid ObjectId' });

        // Update the product document
        const result = await coll.updateOne(
            { _id: ObjectId.createFromHexString(id) },
            { $set: updates }
        );

        // Check if the product was found
        if (result.matchedCount === 0 ) return res.status(404).json({ error: 'Product not found' });

        // Response if successful
        res.status(200).json({
            updatedCount: result.modifiedCount, 
            updatedFields: updates 
        });

    } catch(error) {
        // Handle failure to update a product
        console.error(error);
        res.status(500).json({
            error: 'Failed to update product',
            details: String(error)
        });
    }
}

async function deleteProduct(req, res) {
    try {
        // Cache collection and get id from parameters
        const coll = await getColl(COLLECTION_NAME);
        const { id } = req.params;

        // Validate ObjectId
        if (!ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid ObjectId'});

        // Delete the product document
        const result = await coll.deleteOne({ _id: ObjectId.createFromHexString(id)});

        // Validate deletion
        if (result.deletedCount === 0) return res.status(404).json({ error: 'Product not found'});

        // Response if successful
        res.status(200).json({
            deleteSuccessful: result.acknowledged,
            deletedRecords: result.deletedCount
        });

    } catch (error) {
        // Handle failure to delete product
        console.error(error);
        res.status(500).json({
            error: 'Failed to delete product',
            details: String(error)
        });
    }
}

async function searchProducts(req, res) {
    try {
        // Cache the collection and setup a query from the request params
        const coll = await getColl(COLLECTION_NAME);
        const searchQuery = {};

        // Search by ISBN (exact match)
        if (req.query.isbn) searchQuery.ISBN = req.query.isbn;

        // Search by name (case-insensitive partial match)
        if (req.query.name) searchQuery.name = { 
            $regex: req.query.name, 
            $options: 'i' 
        };

        // Search by department (exact match)
        if (req.query.department) searchQuery.department = req.query.department;

        // Search by price range
        if (req.query.minPrice || req.query.maxPrice) {
            searchQuery.price = {};
            if (req.query.minPrice) {
                const minPrice = parseFloat(req.query.minPrice);
                if (!isNaN(minPrice)) searchQuery.price.$gte = minPrice;
            }
            if (req.query.maxPrice) {
                const maxPrice = parseFloat(req.query.maxPrice);
                if (!isNaN(maxPrice)) searchQuery.price.$lte = maxPrice;
            }
        }

        // Search by adjective (case-insensitive partial match)
        if (req.query.adjective) searchQuery.adjective = { 
            $regex: req.query.adjective, 
            $options: 'i' 
        };

        // Search by material (case-insensitive partial match)
        if (req.query.material) searchQuery.material = {
            $regex: req.query.material,
            $options: 'i'
        };

        // Search by country of origin (exact match)
        if (req.query.country) searchQuery.country_of_origin = req.query.country;

        // Get/set pagination settings
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        // Products selected based on search query and pagination
        const products = await coll.find(searchQuery)
            .skip(skip)
            .limit(limit)
            .toArray();

        // Number of total documents
        const totalCount = await coll.countDocuments(searchQuery);

        // Total pages based on pagination
        const totalPages = Math.ceil(totalCount / limit);

        //Set response
        res.json({
            page,
            limit,
            totalPages,
            totalCount,
            count: products.length,
            products
        });

    } catch(error) {
        // Handle failure to fetch products with search query
        console.error(error);
        res.status(500).json({
            error: 'Failed to fetch products with search query',
            details: String(error)
        });
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts
}