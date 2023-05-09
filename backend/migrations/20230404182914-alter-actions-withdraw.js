'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('actions', 'withdrawTemplateId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'withdrawTemplates',
        key: 'id'
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('actions, withdrawTemplateId');
  }
};
