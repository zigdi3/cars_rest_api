'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    plate: DataTypes.STRING,
    renavam: DataTypes.STRING,
    chassi: DataTypes.STRING,
    model: DataTypes.STRING,
    mark: DataTypes.STRING,
    year: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN
  }, {});
  Car.associate = function(models) {
    // associations can be defined here
  };
  return Car;
};