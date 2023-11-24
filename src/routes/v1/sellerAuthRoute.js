const router = require('express').Router();
const { checkSchema } = require('express-validator');

const sellerAuthController = require('../../controllers/v1/sellerAuthController');
const sellerAuthSchema = require('../../schemas/v1/sellerAuthSchema');
router.post(
  '/register',
  //checkSchema(sellerAuthSchema.registerValidationRules)
  sellerAuthController.register,
);
module.exports = router;
