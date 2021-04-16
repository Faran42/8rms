'use strict';

const { DataTypes } = require('sequelize');


module.exports = {
  up: async (queryInterface, Sequelize) => {    
    await queryInterface.createTable('folhas_mensais', { 
      id:{
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      titulo:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      mes:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      ano: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      horas_trabalhadas: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      total_pago: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      pago: {
        type: DataTypes.BOOLEAN,
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
    await queryInterface.dropTable('folhas_mensais');
  }
};
