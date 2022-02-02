'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('Adms', 'adm', {
     type: Sequelize.BOOLEAN,
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Adms', 'adm');
  }
};