// Importa o modelo de produto
const Product = require('../models/productModel');
// Importa funções de validação
const { validateProduct } = require('../utils/validation');

// Controlador para gerenciar produtos
class ProductController {
    // Método para criar um novo produto
    async createProduct(req, res) {
        const { error } = validateProduct(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const product = new Product(req.body);
        try {
            await product.save();
            res.status(201).send(product);
        } catch (err) {
            res.status(500).send('Erro ao criar o produto: ' + err.message);
        }
    }

    // Método para editar um produto existente
    async editProduct(req, res) {
        const { error } = validateProduct(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!product) return res.status(404).send('Produto não encontrado.');
            res.send(product);
        } catch (err) {
            res.status(500).send('Erro ao editar o produto: ' + err.message);
        }
    }

    // Método para deletar um produto
    async deleteProduct(req, res) {
        try {
            const product = await Product.findByIdAndRemove(req.params.id);
            if (!product) return res.status(404).send('Produto não encontrado.');
            res.send('Produto deletado com sucesso.');
        } catch (err) {
            res.status(500).send('Erro ao deletar o produto: ' + err.message);
        }
    }

    // Método para listar todos os produtos
    async listProducts(req, res) {
        try {
            const products = await Product.find();
            res.send(products);
        } catch (err) {
            res.status(500).send('Erro ao listar produtos: ' + err.message);
        }
    }
}

// Exporta uma instância do controlador
module.exports = new ProductController();