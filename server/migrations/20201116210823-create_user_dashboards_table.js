'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     queryInterface.createTable('user_dashboards', {
       id: {
         type: Sequelize.INTEGER(11),
         allowNull: false,
         autoIncrement: true,
         primaryKey: true
       },
       userId: {
         type: Sequelize.INTEGER,
         references: {
           model: {
             tableName: 'users'
           },
           key: 'id'
         },
         allowNull: false
       },
       DashboardId: {
         type: Sequelize.INTEGER,
         references: {
           model: {
             tableName: 'dashboards'
           },
           key: 'id'
         },
         allowNull: false
       }
     });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     queryInterface.dropTable('user_dashboards');
  }
};
