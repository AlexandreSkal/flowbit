'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('settings', 'telegramBot', Sequelize.STRING);
    await queryInterface.addColumn('settings', 'telegramChat', Sequelize.STRING);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('settings, telegramBot');
    await queryInterface.removeColumn('settings, telegramChat');
  }
};
