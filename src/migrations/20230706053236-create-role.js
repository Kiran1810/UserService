'use strict';
/** @type {import('sequelize-cli').Migration} */

const { Enums } = require('../utils/common');
const { ADMIN, CUSTOMER, FLIGHT_COMPANY } = Enums.USER_ROLE_ENUMS;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.ENUM(ADMIN, CUSTOMER, FLIGHT_COMPANY), // ✅ FIXED
        allowNull: false,
        defaultValue: CUSTOMER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW') // Optional default
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW') // Optional default
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Roles');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Roles_name";'); // Drop ENUM type manually
  }
};
