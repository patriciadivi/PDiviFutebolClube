'use strict';

//JSdocs - para trazer o auto complet do sequelize
/**
 * @param {import ('sequelize').queryInterface } queryInterface
 * @param {import ('sequelize').Sequelize} Sequelize
 */

module.exports = {
   up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('users', { 
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type : Sequelize.INTEGER,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
     await queryInterface.dropTable('users');
  }
};
