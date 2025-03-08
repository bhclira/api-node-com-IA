// src/models/productModel.js
const mongoose = require('mongoose');

// Define o esquema do produto
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // O nome é obrigatório
        trim: true // Remove espaços em branco no início e no final
    },
    price: {
        type: Number,
        required: true, // O preço é obrigatório
        min: 0 // O preço deve ser um número positivo
    },
    description: {
        type: String,
        trim: true // Remove espaços em branco no início e no final
    },
    createdAt: {
        type: Date,
        default: Date.now // Data de criação padrão é a data atual
    }
});

// Cria o modelo do produto
const Product = mongoose.model('Product', productSchema);

// Exporta o modelo para uso em outros arquivos
module.exports = Product;