'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('addresses', [
      {
        street: 'rua um',
        user_id: 1,
      },
      {
        street: 'rua dois',
        user_id: 1,
      },
      {
        street: 'rua nove',
        user_id: 2,
      },
      {
        street: 'rua vinte',
        user_id: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('addresses', null, {});
  },
};
