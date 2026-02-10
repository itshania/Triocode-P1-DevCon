'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      { name: 'Alice', email: 'alice@example.com', password: 'hashedpassword', role: 'organizer', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bob', email: 'bob@example.com', password: 'hashedpassword', role: 'attendee', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
