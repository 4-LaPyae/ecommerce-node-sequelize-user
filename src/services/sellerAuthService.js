const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const config = require('../config/auth.config');
const { Seller, SellerPhone, sequelize } = require('../database/models');
const phoneNoHelper = require('../helpers/phoneNoHelper');

const sellerAuthService = {
  register: async (req) => {
    const t = await sequelize.transaction();
    try {
      req.password = bcrypt.hashSync(req.password, 8);
      const seller = await Seller.create(req, { transaction: t });
      const accountId = new Date().getTime() + seller.id;
      await seller.update({ accountId }, { transaction: t });
      const phoneInfo = await phoneNoHelper.storePhoneNumberInfo(
        req.phone,
        req.countryCode,
      );
      if (!phoneInfo || !phoneInfo.isValid) {
        throw new Error('Invalid phone number.');
      }
      await SellerPhone.create(
        {
          sellerId: seller.id,
          phoneNumber: phoneInfo.phoneNumber,
          nationalFormat: phoneInfo.nationalFormat,
          countryCode: phoneInfo.countryCode,
          regionCode: phoneInfo.regionCode,
          isValid: phoneInfo.isValid,
          possibleFormats: phoneInfo.possibleFormats,
        },
        { transaction: t },
      );
      const token = sellerAuthService.signToken(seller);
      await t.commit();
      return {
        status: 200,
        message: 'Successfully seller created.',
        data: seller,
      };
    } catch (error) {
      await t.rollback();
      throw new Error('User registration failed: ' + error.message);
    }
  },
  login: async (req) => {
    try {
      const { phone, countryCode, password, deviceToken } = req;
    } catch (error) {
      throw new Error(error);
    }
  },
  signToken: (seller) => {
    return jwt.sign({ id: seller.id }, config.token_secret, {
      expiresIn: config.token_expiresIn,
    });
  },
};

module.exports = sellerAuthService;
