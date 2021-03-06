'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('setores', { 
      id:{
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nome:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      descricao:{
        type: DataTypes.STRING,
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
    await queryInterface.dropTable('setores')
  }
};