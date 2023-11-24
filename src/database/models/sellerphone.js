'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SellerPhone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SellerPhone.belongsTo(models.Seller, {
        foreignKey: 'sellerId',
        as: 'SellerPhoneInfo',
      });
    }
  }
  SellerPhone.init(
    {
      sellerId: DataTypes.INTEGER,
      phoneNumber: DataTypes.STRING(20),
      nationalFormat: DataTypes.STRING(50),
      countryCode: DataTypes.INTEGER,
      regionCode: DataTypes.STRING(10),
      isValid: DataTypes.BOOLEAN,
      possibleFormats: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: 'SellerPhone',
      paranoid: true,
    },
  );
  return SellerPhone;
};
