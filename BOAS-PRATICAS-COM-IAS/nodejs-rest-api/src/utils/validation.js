// Este arquivo contém funções de validação para os dados de entrada nos endpoints de criação e edição de produtos.

const { body, validationResult } = require('express-validator');

// Função para validar os dados de criação de um produto
const validateProductCreation = [
    body('name')
        .notEmpty().withMessage('O nome do produto é obrigatório.')
        .isString().withMessage('O nome do produto deve ser uma string.'),
    body('price')
        .notEmpty().withMessage('O preço do produto é obrigatório.')
        .isFloat({ gt: 0 }).withMessage('O preço do produto deve ser um número maior que zero.'),
    body('description')
        .optional()
        .isString().withMessage('A descrição do produto deve ser uma string.'),
];

// Função para validar os dados de edição de um produto
const validateProductUpdate = [
    body('name')
        .optional()
        .isString().withMessage('O nome do produto deve ser uma string.'),
    body('price')
        .optional()
        .isFloat({ gt: 0 }).withMessage('O preço do produto deve ser um número maior que zero.'),
    body('description')
        .optional()
        .isString().withMessage('A descrição do produto deve ser uma string.'),
];

// Função para verificar se houve erros de validação
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Exportando as funções de validação
module.exports = {
    validateProductCreation,
    validateProductUpdate,
    validate,
};