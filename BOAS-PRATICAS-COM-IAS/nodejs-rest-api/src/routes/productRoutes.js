const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');
const { validateProduct, validateProductUpdate } = require('../utils/validation');

// Rota para criar um novo produto
router.post('/products', validateProduct, ProductController.createProduct);

// Rota para editar um produto existente
router.put('/products/:id', validateProductUpdate, ProductController.updateProduct);

// Rota para deletar um produto
router.delete('/products/:id', ProductController.deleteProduct);

// Rota para listar todos os produtos
router.get('/products', ProductController.getAllProducts);

module.exports = router;