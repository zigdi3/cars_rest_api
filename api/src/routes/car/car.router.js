'use strict';
var carController = require('../../controllers/car.Controller.js');
var express = require('express');
var router = express.Router();

/* Get all registred cars */
router.get('/api/car', carController.getAllCar);

/* Register new car*/
router.post('/api/car', carController.createCar);

/* Get detail by specific car */
router.get('/api/car/:id', carController.getCar);

/* Edit car*/
router.put('/api/car', carController.editCar);

/* Delete register by car */
router.delete('/api/car/:id', carController.deleteCar);

module.exports = router;