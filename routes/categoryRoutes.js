const express = require('express');
const router = express.Router();
const {createCategory,getAllCategories,getCategoryById,updateCategory,deleteCategory} = require('../controllers/categoryController');

router.post('/admin/createcategory', createCategory);
router.get('/admin/getallcategory', getAllCategories);
router.get('/admin/getcategory/:id', getCategoryById);
router.put('/admin/updatecategory/:id', updateCategory);
router.delete('/admin/deletecategory/:id', deleteCategory);

module.exports = router;
