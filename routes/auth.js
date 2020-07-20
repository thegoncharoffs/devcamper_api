const express = require('express');
const {
  register,
  login,
  getMe,
  updateDetails,
  forgotPassword,
  resetPassword,
  updatePassword,
} = require('../controllers/auth');
const { protect } = require('../middlewares/auth');

const router = express.Router();

router
  .post('/register', register)
  .post('/login', login)
  .get('/me', protect, getMe)
  .post('/forgotpassword', forgotPassword)
  .put('/resetpassword/:resettoken', resetPassword)
  .put('/updatedetails', protect, updateDetails)
  .put('/updatepassword', protect, updatePassword);

module.exports = router;
