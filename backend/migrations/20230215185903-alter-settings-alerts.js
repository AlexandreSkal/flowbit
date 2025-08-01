'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('settings', 'phone', Sequelize.STRING);
    await queryInterface.addColumn('settings', 'sendGridKey', Sequelize.STRING);
    await queryInterface.addColumn('settings', 'twilioSid', Sequelize.STRING);
    await queryInterface.addColumn('settings', 'twilioToken', Sequelize.STRING);
    await queryInterface.addColumn('settings', 'twilioPhone', Sequelize.STRING);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('settings, phone');
    await queryInterface.removeColumn('settings, sendGridKey');
    await queryInterface.removeColumn('settings, twilioSid');
    await queryInterface.removeColumn('settings, twilioToken');
    await queryInterface.removeColumn('settings, twilioPhone');
  }
};
