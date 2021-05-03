'use strict';
var carRouter = require("./car/car.router.js");
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('../swagger/swagger-definition.json');

var register = function (app) {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use('/', carRouter);
};

module.exports = register;