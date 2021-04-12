'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('funcionarios', { 
      id:{
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nome:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      setor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cargo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      administrador: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      salario: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },       
     });     
 },

 down: async (queryInterface, Sequelize) => {   
    await queryInterface.dropTable('funcionarios');    
 }
};
