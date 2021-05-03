'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cars', {
        id:{
        type: Sequelize.INTEGER,
        allownull: false,
        primaryKey: true,
        autoIncrement: true
        },
        plate:{
        type: Sequelize.STRING,
        allownull: false,
        unique: true
        },
        renavam:{
        type: Sequelize.STRING,
        allownull: false,
        unique: true
        },
        chassi: {
        type: Sequelize.STRING,
        allownull: false,
        unique: true
        },
        model: {
        type:Sequelize.STRING,
        allownull: false
        },
        mark: {type: Sequelize.STRING,
        allownull: false
        },
        year: {
        type:Sequelize.INTEGER,
        allownull: false
        },
        isdeleted: {
        type: Sequelize.BOOLEAN,
        allownull: false
        },
        createdAt: {
        allowNull: false,
        type: Sequelize.DATE
        },
        updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
        }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cars');
  }
};