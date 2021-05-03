'use strict';
var db = require('../models/index.js');
var car = require('../models/car.js');
var CarModel = car(db.sequelize, db.Sequelize.DataTypes);

/* Create a new car OK */
var createCar = function (req, res) {
  console.log(req);
  CarModel.create({
    plate: req.body.plate,
    chassi: req.body.chassi,
    renavam: req.body.renavam,
    mark: req.body.mark,
    model: req.body.model,
    year: req.body.year,
    isDeleted: false
  }).then(car => {
    res.status(200).json(car);
  }).catch(err => res.status(400)
  .json( err.errors));
};

/* Get car */
var getCar = function (req, res) {
CarModel.findByPk(req.params.id)
 .then (function(car) {
   res.status(200).json({
car: car,
   });
 });
}

/* Get all cars OK*/
var getAllCar = function (req, res) {
  CarModel.findAll({
  where: { isDeleted: false }
  }).then(function (Car) {
    res.status(200).json({
      car: Car,
      status: 'success'
        });
  });
};

 /* db.execute(`SELECT * FROM Cars
  WHERE ISDELETED IS 0
  ORDER BY ID ASC`, req.body)
  .then(results => res.json(results.rows))
  .catch(err => res.status(400).json(
    {error: 'Error search Registers '+ err}));
*/


  




/* Update Car OK*/
var editCar = function (req, res) {
  CarModel.update({
    plate: req.body.plate,
    chassi: req.body.chassi,
    renavam: req.body.renavam,
    mark: req.body.mark,
    model: req.body.model,
    year: req.body.year,
    isDeleted: false
    },
    {
      where: { id: req.body.id }
    }).then(car => {
    res.status(200).json({
       });
  }).catch(err => res.status(400)
  .json({error: 'Validation error ' + err}));
};

/* Delete Car OK */
var deleteCar = function (req, res) {
  CarModel.update({
      isDeleted: true
        },
    {
      where: { id: req.params.id }
    }).then(() => {
    res.status(200).json({
    status: 'success'
    } );
  });
};

/* Exports all methods */
module.exports = {
  getAllCar: getAllCar,
  createCar: createCar,
  getCar: getCar,
  editCar: editCar,
  deleteCar: deleteCar
};