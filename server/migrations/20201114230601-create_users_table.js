'use strict';
const {DataTypes} = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     queryInterface.createTable("users", {
       id: {
         type: Sequelize.INTEGER(11),
         allowNull: false,
         autoIncrement: true,
         primaryKey: true
       },
       name: Sequelize.STRING(100),
       email: {
         type: DataTypes.STRING(100),
         validate: {
           isEmail: true,
         },
         unique: true,
       },
       hashedPassword: {
         type: DataTypes.STRING(64),
         is: /^[0-9a-f]{64}$/i
       },
       createdAt: Sequelize.DATE,
       updatedAt: Sequelize.DATE
     });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     queryInterface.dropTable("users");
  }
};
