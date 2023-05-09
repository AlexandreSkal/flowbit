'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const defaultSymbol = 'BTCBUSD'
    const symbol = await queryInterface.rawSelect('symbols', { where: { symbol: defaultSymbol } }, ['symbol']);
    if (!symbol) {
      return queryInterface.bulkInsert('symbols', [{
        symbol: defaultSymbol,
        basePrecision: 8,
        quotePrecision: 8,
        minNotional: '0.1',
        minLotSize: '0.1',
        isFavorite: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    }
    console.log('Already have information in DB');
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.deleteBulk('symbols', null, {})
  }
};
