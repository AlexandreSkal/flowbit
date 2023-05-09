'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const orderTemplateId = await queryInterface.rawSelect('orderTemplates', { where: {}, limit: 1 }, ['id']);
    if (!orderTemplateId) {
      return queryInterface.bulkInsert('orderTemplates', [{
        name: 'Template show',
        symbol: 'BTCBUSD',
        type: 'MARKET',
        side: 'Buy',
        limitPrice: null,
        limitPriceMultiplier: 1,
        stopPrice: null,
        stopPriceMultiplier: 1,
        quantity: 'MIN_NOTIONAL',
        quantityMultiplier: 1,
        icebergQty: null,
        icebergQtyMultiplier: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    }
    console.log('Already have information in DB');
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.deleteBulk('orderTemplates', null, {})
  }
};
