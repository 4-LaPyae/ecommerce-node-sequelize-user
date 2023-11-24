const { validationResult } = require('express-validator');

const responseMessage = require('../../helpers/resMsgHelper');
const sellerAuthService = require('../../services/sellerAuthService');

const authController = {
  register: async (req, res, next) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({
    //     isSuccess: false,
    //     message: 'Validation Error',
    //     errors: errors.array(),
    //   });
    // }

    sellerAuthService
      .register(req.body)
      .then((data) => {
        responseMessage(res, data.message, data.data);
      })
      .catch((err) => {
        next(err);
      });
  },
};

module.exports = authController;
