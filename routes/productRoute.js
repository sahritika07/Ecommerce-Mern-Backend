const express = require('express');
const router = express.Router();
const {
  productAdd,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// Create a new product
router.post('/add', productAdd);

// Create a new product

// Get all products user
router.get('/user/getproducts', getAllProducts);


// Get all products admin

router.get('/admin/getproducts', getAllProducts);

// Get a product by ID admin
router.get('/admin/getproducts/:id', getProductById);

// Get a product by ID user
router.get('/admin/getproducts/:id', getProductById);

// Update a product by ID
router.put('/admin/update/:id', updateProduct);

// Delete a product by ID
router.delete('/:id', deleteProduct);

module.exports = router;
