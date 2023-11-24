'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Seller.init(
    {
      accountId: DataTypes.BIGINT,
      shopName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      accountStatus: DataTypes.STRING,
      accountType: DataTypes.STRING,
      deviceToken: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Seller',
      paranoid: true,
    },
  );
  return Seller;
};
