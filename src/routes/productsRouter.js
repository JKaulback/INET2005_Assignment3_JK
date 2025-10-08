const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsController.getAllProducts);
// Note: It is important for /search to go before /:id, or the router will
// assume that you are trying to getProductById using 'search' with the query
// parameters as the 'id'
router.get('/search', productsController.searchProducts);
router.get('/:id', productsController.getProductById);
router.post('/', express.json(), productsController.createProduct);
router.put('/:id', express.json(), productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;