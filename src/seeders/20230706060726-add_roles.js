'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('roles', [ {
        name: 'admin',
        updatedAt:new Date(),
        createdAt:new Date()
        
       } ,
       {name:'customer',
       updatedAt:new Date(),
       createdAt:new Date()
       },
       {name:'flightcompany',
       updatedAt:new Date(),
       createdAt:new Date()
       }], );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('roles', null, {});
  }

};
