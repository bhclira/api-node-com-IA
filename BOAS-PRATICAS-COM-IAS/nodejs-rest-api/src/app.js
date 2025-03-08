const express = require('express'); // Importa o módulo Express
const bodyParser = require('body-parser'); // Importa o middleware para parsing do corpo da requisição
const productRoutes = require('./routes/productRoutes'); // Importa as rotas de produtos

const app = express(); // Cria uma instância do aplicativo Express

// Middleware para parsing de JSON
app.use(bodyParser.json());

// Middleware para parsing de URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));

// Define a rota base para produtos
app.use('/products', productRoutes);

// Define a porta do servidor
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`); // Loga a porta em que o servidor está rodando
});