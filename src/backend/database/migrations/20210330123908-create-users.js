'use strict';
const { DataTypes } = require("sequelize");
// Para saber quais opções de DataTpyes usar https://sequelize.org/master/manual/model-basics.html

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('users', { 
       id:{
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       },
       nome:{
         type: DataTypes.STRING,
         allowNull: false,
       },
       email: {
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
     await queryInterface.dropTable('users');    
  }
};
