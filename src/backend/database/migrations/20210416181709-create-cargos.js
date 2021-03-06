'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cargos', { 
      id:{
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      setor_id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        references: { model: 'setores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('cargos')
  }
};