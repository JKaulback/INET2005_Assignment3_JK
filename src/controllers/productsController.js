const { ObjectId } = require('mongodb');
const { getColl } = require('../config/db_collection_access');

async function getAllProducts(req, res) {
    try {
        const coll = await getColl();

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const totalCount = await coll.countDocuments();

        const products = await coll.find({})
            .skip(skip)
            .limit(limit)
            .toArray();

        const totalPages = Math.ceil(totalCount / limit);

        res.json({
            page,
            limit,
            totalPages,
            totalCount,
            count: products.length,
            products
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Failed to fetch products',
            details: String(error)
        });
    }
}

async function getProductById(req, res) {

}

async function createProduct(req, res) {
    
}

async function updateProduct(req, res) {

}

async function deleteProduct(req, res) {

}

async function searchProducts(req, res) {

}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts
}