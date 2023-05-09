'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const automationId = await queryInterface.rawSelect('automations', { where: {}, limit: 1 }, ['id']);
    if (!automationId) {
      return queryInterface.bulkInsert('automations', [{
        name: 'Estratégia Teste',
        symbol: 'BTCBUSD',
        indexes: 'BTCBUSD:RSI_1m',
        conditions:"",
        isActive: false,
        logs: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    }
    console.log('Already have information in DB');
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.deleteBulk('automations', null, {})
  }
};
