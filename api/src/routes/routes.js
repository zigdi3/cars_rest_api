'use strict';
var carRouter = require("./car/car.router.js");

var register = function (app) {
  app.use('/', carRouter);
};

module.exports = register;