# Node.js REST API for Product Management

Este projeto é uma API RESTful desenvolvida em Node.js para gerenciar produtos. A API permite criar, editar, deletar e listar produtos, com validações de entrada para garantir a integridade dos dados.

## Estrutura do Projeto

```
nodejs-rest-api
├── src
│   ├── controllers
│   │   └── productController.js  # Controlador para gerenciar a lógica de produtos
│   ├── models
│   │   └── productModel.js        # Modelo de dados para produtos
│   ├── routes
│   │   └── productRoutes.js       # Definição das rotas da API
│   ├── app.js                     # Ponto de entrada da aplicação
│   └── utils
│       └── validation.js          # Funções de validação de entrada
├── package.json                   # Configuração do npm e dependências
├── .env                           # Variáveis de ambiente
└── README.md                      # Documentação do projeto
```

## Dependências

- Express: Framework para construção de aplicações web em Node.js.
- dotenv: Para carregar variáveis de ambiente a partir do arquivo `.env`.
- body-parser: Middleware para analisar o corpo das requisições.

## Configuração

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd nodejs-rest-api
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e adicione suas variáveis de ambiente, como configurações de banco de dados.

## Executando a API

Para iniciar o servidor, execute o seguinte comando:

```
npm start
```

A API estará disponível em `http://localhost:3000`.

## Endpoints

- `POST /products`: Cria um novo produto.
- `PUT /products/:id`: Edita um produto existente.
- `DELETE /products/:id`: Deleta um produto.
- `GET /products`: Lista todos os produtos.

## Testando a API

Você pode usar o Insomnia ou qualquer outra ferramenta de teste de API para fazer requisições aos endpoints acima. Certifique-se de incluir os dados necessários no corpo das requisições para os endpoints de criação e edição.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Abra um pull request ou crie uma issue para discutir mudanças.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.