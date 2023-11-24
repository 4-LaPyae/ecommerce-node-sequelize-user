'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SellerPhones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      nationalFormat: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      countryCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      regionCode: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      isValid: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      possibleFormats: {
        type: Sequelize.JSON,
        allowNull: true,
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
    await queryInterface.dropTable('SellerPhones');
  },
};
