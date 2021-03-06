# Cars API
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

## Pacotes utilizados neste projeto:
[Express] - Rapidez na criação de rotas
[Sequelize](https://github.com/sequelize/sequelize) - Automatizar CRUD ao Banco de dados
[SwaggerUI](https://github.com/swagger-api/swagger-ui) - Ferramenta para design construção de documentos e RESTful para web services.
[Mocha](https://github.com/mochajs/mocha) - Auxilia em testes da aplicação.
[Chai](https://github.com/chaijs/chai) / [chaiHttp](https://www.chaijs.com/plugins/chai-http/) - auxilia em testes criando a camada http.

## Projeto

Esta API entrega um CRUD de veículos (Criar,Recuperar, atUalizar e Deletar) . Através do swagger e possível salvar em JSON ou texto os registros de dentro do banco.

Ainda está em desenvolvimento os testes unitários da aplicação.


## Instalação

Este projeto requer [Node.js](https://nodejs.org/) v14+ para rodar.

Instale as dependencias e execute o app. 

```sh
cd api
npm i
npm start
```

## Rotas
Rota padrão para o swaggerUI:

[http:localhost:3000/swagger](http:localhost:3000/swagger)

Rota da api

[http:localhost:3000/api](http:localhost:3000/api)

## Licença

MIT
