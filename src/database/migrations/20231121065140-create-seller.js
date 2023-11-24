'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sellers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      accountId: {
        unique: true,
        type: Sequelize.BIGINT,
      },
      shopName: {
        type: Sequelize.STRING,
      },
      email: {
        unique: true,
        allowNull: true,
        type: Sequelize.STRING,
      },

      password: {
        type: Sequelize.STRING,
      },
      accountStatus: {
        defaultValue: 'PENDING',
        type: Sequelize.STRING,
      },
      accountType: {
        defaultValue: 'PERSONAL',
        type: Sequelize.STRING,
      },
      deviceToken: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sellers');
  },
};
