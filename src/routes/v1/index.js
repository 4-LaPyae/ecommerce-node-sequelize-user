const router = require('express').Router();

const authRoute = require('./authRoute');
const otpRoute = require('./otpRoute');
const sellerAuthRoute = require('./sellerAuthRoute');
const userRoute = require('./userRoute');

router.use('/auth', authRoute);
router.use('/otp', otpRoute);
router.use('/users', userRoute);
//seller
router.use('/seller/auth', sellerAuthRoute);
//end

module.exports = router;
